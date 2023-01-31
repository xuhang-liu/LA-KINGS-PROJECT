import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Header } from "../layout/Header";
import { AddNewList } from "./AddNewList";
import { EditShoppingList } from "./EditShoppingList";
import {
    Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, Text, Table, Tbody, Th, Thead, Td, Tr
} from '@chakra-ui/react';
import { FiSearch, FiPlus } from 'react-icons/fi';

export const TodoListPortal = (props) => {

    const [isAuthenticated, setisAuthenticated] = useState(JSON.parse(sessionStorage.getItem("isAuthenticated")));
    const [keyWords, setkeyWords] = useState("");
    const [showAddNew, setshowAddNew] = useState(false);
    const [showEdit, setshowEdit] = useState(false);
    const [shopToBeEdit, setshopToBeEdit] = useState({});
    const [shopList, setshopList] = useState({});


    useEffect(() => {
        window.scrollTo(0, 0);
        //Get Shopping List
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let list_data = { "keyword": "", "user_id": props.location.state.user_id };

        axios
            .post("get-shopping-list", list_data, config)
            .then((res) => {
                setshopList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const refresh = () => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let list_data = { "keyword": "", "user_id": props.location.state.user_id };

        axios
            .post("get-shopping-list", list_data, config)
            .then((res) => {
                setshopList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function onChange(e) {
        setkeyWords(e.target.value);
    };

    const onKeyPress = (e) => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let list_data = { "keyword": e.target.value, "user_id": props.location.state.user_id };

        axios
            .post("get-shopping-list", list_data, config)
            .then((res) => {
                setshopList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSearch = (e) => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let list_data = { "keyword": keyWords, "user_id": props.location.state.user_id };

        axios
            .post("get-shopping-list", list_data, config)
            .then((res) => {
                setshopList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function addNewList() {
        setshowAddNew(true);
    }

    const deleteABag = (list_id) => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let list_data = { "list_id": list_id };

        axios
            .post("delete-a-shopping-bag", list_data, config)
            .then((res) => {
                console.log(res);
                refresh();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (!isAuthenticated) {
        return <Redirect to="/" />;
    } else {
        return (
            <React.Fragment>
                <Header />
                {showAddNew ?
                    <AddNewList
                        setshowAddNew={setshowAddNew}
                        user_id={props.location.state.user_id}
                        refresh={refresh}
                    /> :
                    <Box>
                        {showEdit ?
                            <EditShoppingList
                                setshowEdit={setshowEdit}
                                user_id={props.location.state.user_id}
                                shopToBeEdit={shopToBeEdit}
                                refresh={refresh}
                            /> :
                            <Box bg="bg-surface" borderRadius="lg" boxShadow="sm" py='10'>
                                <Stack spacing="5">
                                    <Text px="6" fontWeight={"bold"} fontSize="lg">Grocery Shopping List</Text>
                                    <Box
                                        px={{
                                            base: '4',
                                            md: '6',
                                        }}
                                        pt="5"
                                    >
                                        <Stack
                                            direction={{
                                                base: 'column',
                                                md: 'row',
                                            }}
                                            justify="space-between"
                                        >
                                            <InputGroup maxW="xs" onKeyUp={onSearch}>
                                                <InputLeftElement pointerEvents="none">
                                                    <Icon as={FiSearch} color="muted" boxSize="5" />
                                                </InputLeftElement>
                                                <Input placeholder="Search" value={keyWords} onChange={onChange} onKeyPress={onKeyPress} />
                                            </InputGroup>
                                            <Box>
                                                <Button _hover={{ bg: "orange" }} colorScheme='blue' leftIcon={<FiPlus />} onClick={addNewList}>New List</Button>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box overflowX="auto" minH='96'>
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th><Text color="muted" fontWeight='bold' fontSize='md'>List Title</Text></Th>
                                                    <Th><Text color="muted" fontWeight='bold' fontSize='md'>Number of Items</Text></Th>
                                                    <Th><Text color="muted" fontWeight='bold' fontSize='md'>Action</Text></Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {Object.keys(shopList).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => {
                                                    let shop = shopList[key];
                                                    return (
                                                        <Tr>
                                                            <Td className="interview-txt9">
                                                                <Text style={{ fontWeight: "600" }}>{shop?.title}</Text>
                                                            </Td>
                                                            <Td className="interview-txt9">
                                                                <Text style={{ fontWeight: "600" }}>{shop?.item_id?.length}</Text>
                                                            </Td>
                                                            <Td className="interview-txt9">
                                                                <Button type="button" mr='4' colorScheme="blue" size="sm" onClick={() => { setshowEdit(true), setshopToBeEdit(shop) }}>View</Button>
                                                                <Button type="button" colorScheme="red" size="sm" onClick={() => deleteABag(shop?.id)}>Delete</Button>
                                                            </Td>
                                                        </Tr>
                                                    )
                                                })}
                                            </Tbody>
                                        </Table>
                                    </Box>
                                </Stack>
                            </Box >}
                    </Box>}
            </React.Fragment >
        )
    }
}

export default TodoListPortal;
