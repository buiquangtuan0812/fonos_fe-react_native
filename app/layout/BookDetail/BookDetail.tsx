import axios from "axios";
import { useFonts } from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Text, TouchableOpacity, 
    View, Image, ScrollView, TouchableWithoutFeedback, FlatList, Keyboard
} from "react-native";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import {faReadme} from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import {faHouse, faChevronDown, faChevronRight,
    faChevronUp, faHeart as heart, faUser, faLock, faBookOpenReader
} from "@fortawesome/free-solid-svg-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import Form from "../../components/FormShare/Form";
import Comment from "../../components/Comment/Comment";
import Like from "../../components/Confirm/Interact/Like";
import ButtonBack from "../../components/Button/ButtonBack";
import FormRating from "../../components/FormRating/FormRating";
import Dislike from "../../components/Confirm/Interact/Dislike";

type Navigation = {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, "BookDetail">;
}

interface BookInfo {
    name: string;
    author: string;
    description: string;
    publisher: string;
    type: string;
    imgDes: string;
    tableOfContent: object;
    dominant_colors: any;
}

interface AuthorInfo {
    name: string;
    birthday: string;
    introduce: string;
    image: string;
}

interface CommentInfo {
    _id: string;
    rating: number;
    content: string;
    timestamp: string;
    user: any;
    like: number;
}

const BookDetail : React.FC<Navigation> = ({navigation, route}) => {

    const props = route.params;
    const [font] = useFonts({
        'Lato-Bold': require('../../../assets/fonts/Lato-Bold.ttf')
    });
    const scrollViewRef = useRef(null);
    const [isLike, setLike] = useState(false);
    const [extend, setExtend] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [showFormLike, setShow] = useState(false);
    const [showDislike, setDislike] = useState(false);
    const [isGetBook, setIsGetBook] = useState(false);
    const [isEvaluated, setIsEvaluated] = useState(false);
    const [isExtendTable, setExtendTable] = useState(false);
    const [showFormRating, setShowFormRating] = useState(false);

    const [data, setData] = useState<BookInfo>({
        name: "",
        author: "",
        description: "",
        publisher: "",
        type: "",
        imgDes: "",
        tableOfContent: {},
        dominant_colors: []
    });

    const [authorInfo, setAuthorInfo] = useState<AuthorInfo>({
        name: "",
        birthday:"",
        introduce: "",
        image: ""
    });

    const [lstComment, setComment] = useState<CommentInfo[]>([]);

    const [bookSameType, setDataBook] = useState<{
        id: string;
        uri: string;
    }[]>([]);

    const [bookSameAuthor, setDataSameAuthor] = useState<{
        id: string;
        uri: string;
    }[]>([]);

    useEffect(() => {
        axios.get<{data: BookInfo}>('http://192.168.34.109:8080/get_book_by_id', {params: {id: String(props.idBook)}})
            .then(res => {
                const book = res.data.data;
                const dataBook = {
                    name: book.name,
                    author: book.author,
                    description: book.description,
                    publisher: book.publisher,
                    type: book.type,
                    imgDes: book.imgDes,
                    tableOfContent: book.tableOfContent,
                    dominant_colors: book.dominant_colors
                }
                setData(dataBook);
            })
            .catch(err => { 
                Alert.alert(err.message);
            })
    }, []);

    useEffect(() => {
        axios.get<{data: CommentInfo[]}>('http://192.168.34.109:8080/cmt/get_comment_of_book', {
                params: {
                    idBook: props.idBook
                }
            })
            .then(res => {
                const comments = res.data.data;
                const lstComment : CommentInfo[] = comments.map(element => ({
                    _id: element._id,
                    rating: element.rating,
                    content: element.content,
                    timestamp: element.timestamp,
                    user: element.user,
                    like: element.like,
                }));
                setComment(lstComment);
            })
            .catch(err => {
                setComment([]);
                // Alert.alert(err.message);
            })
    }, []);

    useEffect(() => {
        axios.get('http://192.168.34.109:8080/cmt/is_rating', {
                params: {
                    idBook: props.idBook,
                    idUser: props.user.id
                }
            })
            .then(res => {
                if (res.data.message === 'Not yet rated') {
                    setIsEvaluated(false);
                }
                else {
                    setIsEvaluated(true);
                }
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []);

    const closeForm = () => {
        setShowForm(false);
    };

    const getBookSameType = () => {
        axios.get<{data: {
            imgDes: string;
            _id: string;
            }[]}>('http://192.168.34.109:8080/get_book_propse_by_id', {
                params: {
                    id: String(props.idBook),
                    type: data.type
                }
            })
            .then(res => {
                const data = res.data.data;
                const book : {id: string, uri: string}[] = data.map(element => ({
                    id: element._id,
                    uri: element.imgDes
                }));
                setDataBook(book);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    };

    const getBookSameAuthor = () => {
        axios.get<{data: {
            imgDes: string;
            _id: string;
            }[]}>('http://192.168.34.109:8080/get_book_propse_by_author', {
                params: {
                    id: String(props.idBook),
                    author: data.author
                }
            })
            .then(res => {
                const data = res.data.data;
                const book : {id: string, uri: string}[] = data.map(element => ({
                    id: element._id,
                    uri: element.imgDes
                }));
                setDataSameAuthor(book);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    };

    const handleLike = () => {
        setLike(!isLike);
        if (isLike) {
            axios.post('http://192.168.34.109:8080/dislike_book', {
                idUser: props.user.id,
                idBook: props.idBook
            })
                .then()
                .catch(err => {
                    Alert.alert(err.message);
                });
            setTimeout(() => {
                setDislike(true);
            }, 300);
        }
        else {
            axios.post('http://192.168.34.109:8080/like_book', {
                idUser: props.user.id,
                idBook: props.idBook
            })
                .then()
                .catch(err => {
                    Alert.alert(err.message);
                });
            setTimeout(() => {
                setShow(true);
            }, 300);
        }
    };

    const renderImage = ({item} : {item: {uri: string}}) => {
        return (
            <Image source={{uri: item.uri}} style = {styles.imageCard}/>
        );
    };

    const renderComment = lstComment.map((value, key) => {
        return (
            <View key = {key}>
                <Comment 
                    idCmt = {value._id}
                    user = {props.user}
                    rating={value.rating} 
                    timestamp = {value.timestamp} 
                    content = {value.content}
                    username = {value.user.username}
                    like = {value.like}
                />
            </View>
        );
    });

    const renderTableContent = Object.entries(data.tableOfContent).map(([key, value]) => 
        (
            <View key = {key} 
                style = {styles.itemTable}
            >   
                <View style = {{width: '86%', flexDirection: "row",}}>
                    <FontAwesomeIcon icon = {faReadme} color = "#aeb6c8" style={{marginTop: 5}}/>
                    <Text style = {styles.chapter}>{key}.{value}</Text>
                </View>
                {key === "Chương 1" || key === "Phần 1"
                    ?
                    <FontAwesomeIcon icon = {faBookOpenReader} color="#778aa8" size={20}/>
                    :
                    <FontAwesomeIcon icon = {faLock} color="#778aa8"/> }
            </View>
        )
    );

    const handleShowMore = () => {
        setExtend(true);
        axios.get<{data: AuthorInfo}>('http://192.168.34.109:8080/get_author_by_name', {
            params: {
                name: data.author
            }
        })
            .then(response => {
                const data = response.data.data;
                const author = {
                    name: data.name,
                    birthday: data.birthday,
                    introduce: data.introduce,
                    image: data.image
                };
                setAuthorInfo(author);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    };

    const handleToAuthor = () => {
        navigation.navigate("AuthorProfile", {nameAuthor: data.author, idBook: String(props.idBook)})
    }

    if (!font) {
        return null;
    }

    setTimeout(() => {
        if (showFormLike) {
            setShow(false);
        }
    }, 2000);

    setTimeout(() => {
        if (showDislike) {
            setDislike(false);
        }
    }, 2000);

    return (
        <View style = {styles.container}>
            <View style = {styles.containerButton}>
                <ButtonBack address={props.address} navigation={navigation} user = {props.user}/>
                {isScroll ?
                    <View style = {{left: 80, position: 'absolute'}}>
                        <Text style = {[styles.name, {fontSize: 16, margin: 0, width: 240}]}>{data.name}</Text>
                    </View>
                    : '' 
                }
                <View style = {styles.btnShare}>
                    <TouchableOpacity onPress={() => setShowForm(true)}>
                        <View style = {styles.btn}>
                            <Icon name = "share" style = {styles.icon}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView 
                showsVerticalScrollIndicator = {false}
                bounces = {false}
                ref = {scrollViewRef}
                onScroll={(event) => {
                    const {y} = event.nativeEvent.contentOffset;

                    if (y > 272 && !isGetBook) {
                        setIsScroll(true);
                        getBookSameType();
                        getBookSameAuthor();
                        setIsGetBook(true);
                    }
                    else if (y > 272 && isGetBook) {
                        setIsScroll(true);
                    }
                    else {
                        setIsScroll(false);
                    }
                }}
                scrollEventThrottle={16}
            >
                <View>
                    <LinearGradient
                        colors={['#225e54', '#27695d', '#368476']}
                        style = {styles.containerBook}
                    >
                        <View>
                            {data.imgDes ? (
                                <Image source={{ uri: data.imgDes }} style={styles.image} />
                            ) : (
                            <View style={[styles.image, {backgroundColor: '#eee'}]}></View>
                            )}
                        </View>
                        <Text style = {styles.name}>{data.name}</Text>
                        <View>
                            <TouchableOpacity 
                                style = {{flexDirection: 'row', alignItems: 'center', marginTop: 12}}
                                onPress={() => handleToAuthor()}
                            >
                                <Text style = {styles.author}>{data.author}</Text>
                                <Icon name = "angle-right" style = {{fontSize: 20, color: 'white'}}/>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.containerRating}>
                            <FontAwesomeIcon icon={faStar} size={16} style = {{color: '#f6ffff'}} />
                            <Text style = {{color: '#f6ffff', marginLeft: 8}}>Chưa có đánh giá</Text>
                        </View>

                        <View style = {{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 12,
                            justifyContent: "space-between",
                            width: '100%'
                        }}>
                            <TouchableOpacity onPress={handleLike}>
                                <View style = {styles.iconHeart}>
                                    {isLike ?
                                        <FontAwesomeIcon icon = {heart} style={{color: '#eb4848'}} />
                                        : 
                                        <FontAwesomeIcon icon = {faHeart} style={{color: '#f6ffff'}} />
                                    }
                                </View>
                            </TouchableOpacity>

                            <View style = {styles.iconReadme}>
                                <FontAwesomeIcon icon = {faReadme} size={22} style={{color: '#fcfefd', marginRight: 12}}/>
                                <Text style={{color: '#fcfefd', fontSize: 16, fontWeight: '600'}}>Đọc chương đầu miễn phí</Text>
                            </View>
                        </View>

                    </LinearGradient>
                </View>

                <View style = {styles.containerContent}>
                    <Text style = {styles.header}>Giới thiệu nội dung</Text>
                    <View style = {{marginBottom: 20}}>
                        <Text  
                            style = {styles.description} 
                            numberOfLines={!extend ? 6 : 0}
                            ellipsizeMode="tail"
                        >{data.description}</Text>
                        {
                            extend ?
                            <View style = {{marginTop: 16}}>
                                <Text style = {styles.header}>Về tác giả</Text>
                                <TouchableOpacity 
                                    style = {{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                    onPress={handleToAuthor}
                                >
                                    <View style = {{flexDirection: "row", alignItems: 'center'}}>
                                        { authorInfo.image ?
                                            <Image source={{uri: authorInfo.image}} style = {styles.imageAuthor} resizeMode="stretch"/>
                                            : 
                                            <View style = {{
                                                    borderRadius: 50, padding: 4,
                                                    backgroundColor: '#fff', width: 60, height: 60
                                                }}
                                            >
                                                <View style = {styles.iconUser}>
                                                    <FontAwesomeIcon icon = {faUser} size={28} color="#67686c"/>
                                                </View>
                                            </View>
                                        }
                                        <Text style = {styles.nameAuthor}>{authorInfo.name}</Text>
                                    </View>

                                    <View>
                                        <FontAwesomeIcon icon = {faChevronRight}/>
                                    </View>
                                </TouchableOpacity>

                                <View style = {{marginTop: 18}}>
                                    <Text style = {[styles.description, {marginBottom: 0}]}>{authorInfo.birthday}</Text>
                                    <Text style = {styles.description}>{authorInfo.introduce}</Text>
                                </View>
                            </View>
                            : ''
                        }
                        {extend ?
                            <TouchableOpacity style = {styles.extend} onPress={() => setExtend(false)}>
                                <Text 
                                    style = {{color: '#192f52', fontWeight: '700', fontFamily: 'Lato-Bold', marginRight: 8}}
                                >
                                    Hiển thị ít hơn
                                </Text>
                                <FontAwesomeIcon icon = {faChevronUp} size={14}/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style = {styles.extend} onPress={() => handleShowMore()}>
                                <Text style = {{color: '#192f52', fontWeight: '700', fontFamily: 'Lato-Bold', marginRight: 8}}
                                >
                                    Xem thêm
                                </Text>
                                <FontAwesomeIcon icon = {faChevronDown} size={14}/>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                        <FontAwesomeIcon icon = {faHouse} size={20} color="#7488a3"/>
                        <Text style = {{color: '#e69288', marginLeft: 12, fontWeight: '700', fontFamily: 'Lato-Bold', fontSize: 16}}>{data.publisher}</Text>
                    </View>

                    <View style = {styles.containerType}>
                        <View style = {styles.type}>
                            <Text style = {{textAlign: 'center', color: '#586b7f', fontWeight: '600'}}>{data.type}</Text>
                        </View>
                    </View>

                    <View style = {[styles.containerType, {paddingBottom: 28}]}>
                        <Text style = {styles.header}>Bạn đọc nói gì</Text>
                        <View style = {{
                            backgroundColor: '#f8fcff',
                            width: '100%',
                            borderRadius: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 20,
                            paddingVertical: 16
                        }}>
                            <FontAwesomeIcon icon = {faCommentDots} size={60} style={{color: '#d9dce1'}}/>
                            <Text style = {{color: '#687ea3', fontSize: 16, fontFamily: 'Lato-Bold', marginLeft: 20}}>Chưa có đánh giá nào</Text>
                        </View>

                        <View style = {{marginTop: 28}}>
                            {renderComment}
                        </View>

                        {!isEvaluated ? 
                            <View style = {styles.ctnButton}>
                                <TouchableOpacity style = {styles.btnRating} onPress={() => setShowFormRating(!showFormRating)}>
                                    <Text style = {{color: '#fff', fontWeight: '700'}}>
                                        Viết đánh giá
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            : ''
                        }
                    </View>
                    
                    <View 
                        style = {{paddingBottom: 24, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#dfe4ea'}}
                    >
                        <Text style = {styles.header}>Mục lục</Text>
                        <View style = {isExtendTable ? {} : {height: 160, overflow: "hidden"}}>
                            {renderTableContent}
                        </View>
                        {isExtendTable ?
                            <TouchableOpacity style = {[styles.extend, {justifyContent: 'center',}]} onPress={() => setExtendTable(false)}>
                                <Text 
                                    style = {{color: '#ef8379', fontWeight: '700', fontFamily: 'Lato-Bold', marginRight: 8}}
                                >
                                    Hiển thị ít hơn
                                </Text>
                                <FontAwesomeIcon icon = {faChevronUp} size={14} color="#ef8379"/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style = {[styles.extend, {justifyContent: 'center',  marginTop: 8}]} onPress={() => setExtendTable(true)}>
                                <Text 
                                    style = {{color: '#ef8379', fontWeight: '700', fontFamily: 'Lato-Bold', marginRight: 8}}
                                >
                                    Xem thêm
                                </Text>
                                <FontAwesomeIcon icon = {faChevronDown} size={14} color="#ef8379"/>
                            </TouchableOpacity>
                        }
                    </View>

                    <View>
                        <Text style = {styles.header}>Tuơng tự với sách này</Text>
                        <Text style = {{color: '#6e8097', fontWeight: '400', marginTop: 8}}>ĐẦU SÁCH TƯƠNG TỰ</Text>
                        <View style = {styles.containerImage}>
                            <FlatList
                                data = {bookSameType}
                                renderItem = {renderImage}
                                horizontal
                                showsHorizontalScrollIndicator = {false}
                            />
                        </View>

                        <Text style = {{color: '#6e8097', fontWeight: '400', marginTop: 28}}>CÙNG TÁC GIẢ</Text>
                        <View style = {styles.containerImage}>
                            <FlatList
                                data = {bookSameAuthor}
                                renderItem = {renderImage}
                                horizontal
                                showsHorizontalScrollIndicator = {false}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            
            {
                showForm ?
                <TouchableWithoutFeedback onPress={closeForm}>
                    <View style = {styles.containerFormShare}>
                        <Form closeForm={closeForm}/>
                    </View>
                </TouchableWithoutFeedback>
                : ''
            }

            {
                showFormRating ?
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style = {styles.containerFormRating}>
                        <FormRating 
                            closeForm={() => setShowFormRating(!showFormRating)}
                            idUser = {props.user.id}
                            idBook = {props.idBook}
                        />
                    </View>
                </TouchableWithoutFeedback>
                : ''
            }

            {
                showFormLike ?
                <Like/>
                : ''
            }

            {
                showDislike ?
                <Dislike/>
                : ''
            }
        </View>
    );
};

export default BookDetail;