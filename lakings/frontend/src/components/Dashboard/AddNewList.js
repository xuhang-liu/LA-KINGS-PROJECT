import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import { Text, Box, Button, Stack, Input, Heading, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Table, Tbody, Th, Thead, Td, Tr, HStack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

export const AddNewList = (props) => {

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: "#ffffff", border: "2px solid #E8EDFC", borderRadius: "5px", height: "20px" }),
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

    const [options, setoptions] = useState([]);
    const [shownewItem, setshownewItem] = useState(false);
    const [title, settitle] = useState("");
    const [item_id, setitem_id] = useState({});
    const [item_quantity, setitem_quantity] = useState(null);
    const [item_id_array, setitem_id_array] = useState([]);
    const [item_quantity_array, setitem_quantity_array] = useState([]);
    const [is_done_array, setis_done_array] = useState([]);

    useEffect(() => {
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
                let ioptions = [];
                res.data.data.map((i) => {
                    let option = { value: (i.title + " ($" + i.price + ")"), label: (i.title + " ($" + i.price + ")") };
                    //Check Quantity
                    if (i.quantity <= 0) {
                        option = { value: (i.title + " ($" + i.price + ")"), label: (i.title + " ($" + i.price + ")" + " -- Out of Stock") };
                    }
                    ioptions.push(option);
                    setoptions(ioptions);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onChange1 = (e) => {
        settitle(e.target.value);
    };

    const onFilter = (item_id) => {
        setitem_id(item_id);
    };

    const onChange2 = (e) => {
        setitem_quantity(e.target.value);
    };

    function addNewItem() {
        setshownewItem(true);
    }

    function saveItem() {
        let data = item_id.label;
        setitem_id_array(item_id_array.concat(data));
        setitem_quantity_array(item_quantity_array.concat(item_quantity));
        setis_done_array(is_done_array.concat(false));
        setitem_id({});
        setitem_quantity(null);
        setshownewItem(false);
    }

    const handleRemoveItem = (index) => {
        if (index !== -1) {
            setitem_id_array([
                ...item_id_array.slice(0, index),
                ...item_id_array.slice(index + 1)
            ]);
            setitem_quantity_array([
                ...item_quantity_array.slice(0, index),
                ...item_quantity_array.slice(index + 1)
            ]);
            setis_done_array([
                ...is_done_array.slice(0, index),
                ...is_done_array.slice(index + 1)
            ]);
        }
    }

    function saveList(e) {
        e.preventDefault();

        //Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "user_id": props.user_id, "title": title, "item_id_array": item_id_array, "item_quantity_array": item_quantity_array, "is_done_array": is_done_array };

        axios
            .post("add-new-shopping-list", item_data, config)
            .then((res) => {
                props.setshowAddNew(false);
                props.refresh();
                alert("New Shopping List Created!");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <React.Fragment>
            <Box px='24' mt='12' mb='14' alignItems='center'>
                <Stack
                    spacing={{
                        base: '8',
                        lg: '6',
                    }}
                    height="full"
                >
                    <Heading as='h5' size='xs' color="muted" mb="5"><b><i className="bx bx-briefcase"></i><span className="ml-2">Shopping Bag / Add New</span></b></Heading>
                    <Box
                        bg="bg-surface"
                        boxShadow='sm'
                        borderRadius="lg"
                        p={{
                            base: '4',
                            md: '6',
                        }}
                    >
                        <form onSubmit={saveList}>
                            <Box mb='4'>
                                <Text fontSize="sm" color="muted" fontWeight="bold" mb='2'>List Title</Text>
                                <Input type="text" name="title" value={title} placeholder="Enter Title here"
                                    onChange={onChange1} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                            </Box>
                            <Box overflowX="auto" mb='6'>
                                <Text fontSize="sm" color="muted" fontWeight="bold" mb='2'>List Table</Text>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th><Text color="muted" fontSize='md' fontWeight='bold'>Name</Text></Th>
                                            <Th><Text color="muted" fontSize='md' fontWeight='bold'>Quantity Needed</Text></Th>
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Object.keys(item_id_array).map((key, index) => {
                                            let item_id = item_id_array[key];
                                            let item_quantity = item_quantity_array[key];
                                            return (
                                                <Tr>
                                                    <Td>
                                                        <Text color="muted" fontSize='sm' fontWeight='bold'>{item_id}</Text>
                                                    </Td>
                                                    <Td>
                                                        <Text color="muted" fontSize='sm' fontWeight='bold'>{item_quantity}</Text>
                                                    </Td>
                                                    <Td>
                                                        <Button type="button" backgroundColor="gray" color="white" variant='solid' borderRadius="2" size="sm" marginRight="1rem" onClick={() => handleRemoveItem(index)}>
                                                            Delete
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </Box>
                            <Box mb='10'>
                                <Button _hover={{ bg: "orange" }} colorScheme='blue' leftIcon={<FiPlus />} onClick={addNewItem}>Add New Item</Button>
                            </Box>
                            <Box align="end">
                                <Button type="submit" backgroundColor="blue" color="white" variant='solid' borderRadius="2" size="lg" marginRight="1rem">
                                    Save
                                </Button>
                                <Button variant='outline' borderRadius="2" border="2px" size="lg" borderColor="grey" type="button" onClick={() => props.setshowAddNew(false)}>
                                    Cancel
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Stack>
            </Box>
            {/* Open Job Target Portal */}
            <Modal onClose={() => setshownewItem(false)} size={"6xl"} isOpen={shownewItem} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box pt='6' mb='5'>
                            <Text fontSize="sm" color="muted">Select Item</Text>
                            <div style={{ zIndex: "9999" }}>
                                <Select value={item_id} onChange={onFilter} options={options} styles={customStyles} required="required" />
                            </div>
                        </Box>
                        <Box mb='5'>
                            <Text fontSize="sm" color="muted">Quantity Needed</Text>
                            <Input type="number" name="item_quantity" value={item_quantity}
                                onChange={onChange2} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                        </Box>
                        <Box py='6'>
                            <HStack spacing="4">
                                <Button type="button" backgroundColor="blue" color="white" variant='solid' borderRadius="2" size="lg" marginRight="1rem" onClick={saveItem}>
                                    Save
                                </Button>
                                <Button variant='outline' borderRadius="2" border="2px" size="lg" borderColor="grey" type="button" onClick={() => setshownewItem(false)}>
                                    Cancel
                                </Button>
                            </HStack>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </React.Fragment>
    )
}

export default AddNewList;