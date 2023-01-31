import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Header } from "../layout/Header";
import { AddNewItems } from "./AddNewItems";
import Select from 'react-select';
import {
    Box, Button, Icon, Input, InputGroup, InputLeftElement, Stack, Text, Table, Tbody, Th, Thead, Td, Tr
} from '@chakra-ui/react';
import { FiSearch, FiPlus } from 'react-icons/fi';

export const ManagerPortal = (props) => {

    const [isAuthenticated, setisAuthenticated] = useState(JSON.parse(sessionStorage.getItem("isAuthenticated")));
    const [keyWords, setkeyWords] = useState("");
    const [showAddNew, setshowAddNew] = useState(false);
    const [itemList, setitemList] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        //Get Items List
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "keyword": "" };

        axios
            .post("get-item-list", item_data, config)
            .then((res) => {
                console.log(res.data.data);
                setitemList(res.data.data);
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
        let item_data = { "keyword": "" };

        axios
            .post("get-item-list", item_data, config)
            .then((res) => {
                console.log(res.data.data);
                setitemList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function onChange(e) {
        setkeyWords(e.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Headers
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            // Request body
            let item_data = { "keyword": e.target.value };

            axios
                .post("get-item-list", item_data, config)
                .then((res) => {
                    console.log(res.data.data);
                    setitemList(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const onSearch = (e) => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "keyword": keyWords };

        axios
            .post("get-item-list", item_data, config)
            .then((res) => {
                console.log(res.data.data);
                setitemList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    function addNewItems() {
        setshowAddNew(true);
    }

    if (!isAuthenticated) {
        return <Redirect to="/" />;
    } else {
        return (
            <React.Fragment>
                <Header />
                {showAddNew ?
                    <AddNewItems
                        setshowAddNew={setshowAddNew}
                        user_id={props.location.state.user_id}
                        refresh={refresh}
                    /> :
                    <Box bg="bg-surface" borderRadius="lg" boxShadow="sm" py='10'>
                        <Stack spacing="5">
                            <Text px="6" fontWeight={"bold"} fontSize="lg">Items Management Portal</Text>
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
                                        <Input placeholder="Search items" value={keyWords} onChange={onChange} onKeyPress={onKeyPress} />
                                    </InputGroup>
                                    <Box>
                                        <Button _hover={{ bg: "orange" }} colorScheme='blue' leftIcon={<FiPlus />} onClick={addNewItems}>New Items</Button>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box overflowX="auto" minH='96'>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th><Text color="muted">Name</Text></Th>
                                            <Th><Text color="muted">Category</Text></Th>
                                            <Th><Text color="muted">Quantity</Text></Th>
                                            <Th><Text color="muted">Price</Text></Th>
                                            <Th><Text color="muted">Action</Text></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Object.keys(itemList).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => {
                                            let item = itemList[key];
                                            return (
                                                <ItemCard
                                                    item={item}
                                                    refresh={refresh}
                                                />
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Stack>
                    </Box >}
            </React.Fragment >
        )
    }
}

export default ManagerPortal;

const ItemCard = (props) => {

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: "#ffffff", border: "2px solid #E8EDFC", borderRadius: "5px" }),
        singleValue: styles => ({
            ...styles,
            color: "#090d3a",
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '400',
            background: "#ffffff"
        }),
        menu: provided => ({ ...provided, color: "#1a202c", background: "#ffffff" }),
    };

    const options = [
        { value: 'Fruits', label: 'Fruits' },
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Dairy', label: 'Dairy' },
        { value: 'Meat', label: 'Meat' },
        { value: 'Others', label: 'Others' },
    ];

    const [showEdit, setshowEdit] = useState(false);
    const [category, setcategory] = useState({ value: props.item?.category, label: props.item?.category });
    const [quantity, setquantity] = useState(props.item?.quantity);
    const [price, setprice] = useState(props.item?.price);

    const onFilter = (category) => {
        setcategory(category);
    };
    const onChange3 = (e) => {
        setquantity(e.target.value);
    };
    const onChange4 = (e) => {
        setprice(e.target.value);
    };

    const updateItemInfo = () => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "item_id": props.item?.id, "category": category.value, "price": price, "quantity": quantity };

        axios
            .post("update-item", item_data, config)
            .then((res) => {
                props.refresh();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const deleteItem = (e) => {
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "item_id": props.item?.id };

        axios
            .post("delete-item", item_data, config)
            .then((res) => {
                props.refresh();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            {showEdit ?
                <Tr>
                    <Td className="interview-txt9">
                        <Text color='muted' style={{ fontWeight: "600" }}>{props.item?.title}</Text>
                    </Td>
                    <Td className="interview-txt9">
                        <div style={{ zIndex: "9999" }}>
                            <Select value={category} onChange={onFilter} options={options} styles={customStyles} />
                        </div>
                    </Td>
                    <Td className="interview-txt9">
                        <Input type="number" name="quantity" value={quantity}
                            onChange={onChange3} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                    </Td>
                    <Td className="interview-txt9">
                        <Input type="number" name="price" value={price}
                            onChange={onChange4} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                    </Td>
                    <Td>
                        <Button type="button" mr='4' colorScheme="blue" size="sm" onClick={() => { setshowEdit(false), updateItemInfo() }}>Save</Button>
                        <Button type="button" mr='4' colorScheme="gray" size="sm" onClick={() => { setshowEdit(false) }}>Cancel</Button>
                        <Button type="button" colorScheme="red" size="sm" onClick={() => { setshowEdit(false), deleteItem() }}>Delete</Button>
                    </Td>
                </Tr> :
                <Tr onClick={() => setshowEdit(true)} style={{ cursor: "pointer" }} transition="margin .2s ease-in-out" _hover={{
                    backgroundColor: '#fafcff'
                }}>
                    <Td className="interview-txt9">
                        <Text color='muted' style={{ fontWeight: "600" }}>{props.item?.title}</Text>
                    </Td>
                    <Td className="interview-txt9">
                        <Text color='muted' style={{ fontWeight: "600" }}>{props.item?.category}</Text>
                    </Td>
                    <Td className="interview-txt9">
                        <Text color='muted' style={{ fontWeight: "600" }}>{props.item?.quantity}</Text>
                    </Td>
                    <Td className="interview-txt9">
                        <Text color='muted' style={{ fontWeight: "600" }}>$ {props.item?.price}</Text>
                    </Td>
                    <Td className="interview-txt9">
                        <Button type="button" mr='4' colorScheme="gray" size="sm" onClick={() => setshowEdit(true)}>Edit</Button>
                    </Td>
                </Tr>}
        </React.Fragment>
    )
}