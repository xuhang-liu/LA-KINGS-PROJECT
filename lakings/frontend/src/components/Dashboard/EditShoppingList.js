import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import { Text, Box, Button, Stack, Input, Heading, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Table, Tbody, Th, Thead, Td, Tr, HStack, Switch, Spacer } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import ReactApexChart from "react-apexcharts";

export const EditShoppingList = (props) => {

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
    const [title, settitle] = useState(props.shopToBeEdit.title);
    const [item_id, setitem_id] = useState({});
    const [item_quantity, setitem_quantity] = useState(null);
    const [item_id_array, setitem_id_array] = useState(props.shopToBeEdit.item_id);
    const [item_quantity_array, setitem_quantity_array] = useState(props.shopToBeEdit.item_quantity);
    const [is_done_array, setis_done_array] = useState(props.shopToBeEdit.is_done);
    const [showEditItem, setshowEditItem] = useState(false);
    const [edit_item_id, setedit_item_id] = useState({});
    const [edit_item_quantity, setedit_item_quantity] = useState(null);
    const [edit_is_done, setedit_is_done] = useState(false);
    const [editIndex, seteditIndex] = useState(null);

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

    const onFilter1 = (edit_item_id) => {
        setedit_item_id(edit_item_id);
    };

    const onChange2 = (e) => {
        setitem_quantity(e.target.value);
    };

    const onChange4 = (e) => {
        setedit_item_quantity(e.target.value);
    };

    const onChange5 = (e) => {
        setedit_is_done(e.target.checked);
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

    function saveEditItem() {
        let edit_item_id_array = item_id_array;
        edit_item_id_array[editIndex] = edit_item_id.label;
        setitem_id_array(edit_item_id_array);

        let edit_item_quantity_array = item_quantity_array;
        edit_item_quantity_array[editIndex] = edit_item_quantity;
        setitem_quantity_array(edit_item_quantity_array);

        let edit_is_done_array = is_done_array;
        edit_is_done_array[editIndex] = edit_is_done;
        setis_done_array(edit_is_done_array);

        setedit_item_id({});
        setedit_item_quantity(null);
        setedit_is_done(false);
        seteditIndex(null);
        setshowEditItem(false);
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

    const handelEditItem = (index, item_id, item_quantity, is_done) => {
        seteditIndex(index);
        setedit_item_id({ value: item_id, label: item_id });
        setedit_item_quantity(item_quantity);
        setedit_is_done(is_done);
        setshowEditItem(true);
    }

    function saveList(e) {
        e.preventDefault();
        //Handle is_done
        let isdone_array = is_done_array;
        isdone_array.map((i, index) => {
            if (i == "True" || i == true) {
                isdone_array[index] = true;
            } else {
                isdone_array[index] = false;
            }
        })

        //Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "title": title, "item_id_array": item_id_array, "item_quantity_array": item_quantity_array, "is_done_array": isdone_array, "shop_id": props.shopToBeEdit.id };

        axios
            .post("update-shopping-list", item_data, config)
            .then((res) => {
                props.setshowEdit(false);
                props.refresh();
                alert("Shopping List Updated!");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let total = 0;
    let bought = 0;
    let i = 0;
    while (i < is_done_array.length) {

        if (is_done_array[i] == "True"){
            bought++;
        }
        total++;
        i++;
    }

    const serieschart = [Math.round(bought/total * 100)];
    const optionschart = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    };

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
                    <Heading as='h5' size='xs' color="muted" mb="5"><b><i className="bx bx-briefcase"></i><span className="ml-2">Shopping Bag / Edit</span></b></Heading>
                    <Box
                        bg="bg-surface"
                        boxShadow='sm'
                        borderRadius="lg"
                        p={{
                            base: '4',
                            md: '6',
                        }}
                    >
                        <Box mb='4'>
                            <Text fontSize="sm" color="muted" fontWeight="bold" mb='2'>Complete rate</Text>
                            <ReactApexChart options={optionschart} series={serieschart} type="radialBar" height={300} width={300}/>
                        </Box>
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
                                            <Th><Text color="muted" fontSize='md' fontWeight='bold'>Bought</Text></Th>
                                            <Th><Text color="muted" fontSize='md' fontWeight='bold'>Action</Text></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Object.keys(item_quantity_array).map((key, index) => {
                                            let item_id = item_id_array[key];
                                            let item_quantity = item_quantity_array[key];
                                            let is_done = (is_done_array[key] == "True" || is_done_array[key] == true) ? true : false;
                                            return (
                                                <Tr>
                                                    <Td>
                                                        <Text color="muted" fontSize='sm' fontWeight='bold'>{item_id}</Text>
                                                    </Td>
                                                    <Td>
                                                        <Text color="muted" fontSize='sm' fontWeight='bold'>{item_quantity}</Text>
                                                    </Td>
                                                    <Td>
                                                        <Text color="muted" fontSize='sm' fontWeight='bold'>{(is_done) ? "Yes" : "No"}</Text>
                                                    </Td>
                                                    <Td>
                                                        {is_done ?
                                                            <Button type="button" backgroundColor="lightblue" color="white" variant='solid' borderRadius="2" size="sm" marginRight="1rem" disabled>
                                                                Edit
                                                            </Button> :
                                                            <Button type="button" backgroundColor="lightblue" color="white" variant='solid' borderRadius="2" size="sm" marginRight="1rem" onClick={() => handelEditItem(index, item_id, item_quantity, is_done)}>
                                                                Edit
                                                            </Button>}
                                                        <Button type="button" backgroundColor="red" color="white" variant='solid' borderRadius="2" size="sm" marginRight="1rem" onClick={() => handleRemoveItem(index)}>
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
                                <Button variant='outline' borderRadius="2" border="2px" size="lg" borderColor="grey" type="button" onClick={() => props.setshowEdit(false)}>
                                    Cancel
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Stack>
            </Box>
            {/* Open New Item */}
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
            {/* Open Edit Item */}
            <Modal onClose={() => setshowEditItem(false)} size={"6xl"} isOpen={showEditItem} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box pt='6' mb='5'>
                            <Text fontSize="sm" color="muted">Edit Item</Text>
                            <div style={{ zIndex: "9999" }}>
                                <Select value={edit_item_id} onChange={onFilter1} options={options} styles={customStyles} required="required" />
                            </div>
                        </Box>
                        <Box mb='5'>
                            <Text fontSize="sm" color="muted">Quantity Needed</Text>
                            <Input type="number" name="edit_item_quantity" value={edit_item_quantity}
                                onChange={onChange4} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                        </Box>
                        <Box mb='5'>
                            <Text fontSize="sm" color="muted">Bought</Text>
                            {edit_item_id?.label?.includes("Out of Stock") ?
                                <Switch colorScheme='blue' onChange={onChange5} isChecked={edit_is_done} defaultChecked={edit_is_done} isDisabled /> :
                                <Switch colorScheme='blue' onChange={onChange5} isChecked={edit_is_done} defaultChecked={edit_is_done} />}
                        </Box>
                        <Box py='6'>
                            <HStack spacing="4">
                                <Button type="button" backgroundColor="blue" color="white" variant='solid' borderRadius="2" size="lg" marginRight="1rem" onClick={saveEditItem}>
                                    Save
                                </Button>
                                <Button variant='outline' borderRadius="2" border="2px" size="lg" borderColor="grey" type="button" onClick={() => setshowEditItem(false)}>
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

export default EditShoppingList;