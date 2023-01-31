import React, { useState } from "react";
import axios from "axios";
import Select from 'react-select';
import { Text, Box, Button, Stack, Input, Heading } from '@chakra-ui/react';

export const AddNewItems = (props) => {

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

    const [name, setname] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);

    const onChange1 = (e) => {
        setname(e.target.value);
    };
    const onFilter = (category) => {
        setcategory(category);
    };
    const onChange3 = (e) => {
        setprice(e.target.value);
    };
    const onChange4 = (e) => {
        setquantity(e.target.value);
    };

    function saveItem(e) {
        e.preventDefault();
        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Request body
        let item_data = { "user_id": props.user_id, "name": name, "category": category?.value, "price": price, "quantity": quantity };

        axios
            .post("add-new-item", item_data, config)
            .then((res) => {
                if (res.data.data) {
                    props.setshowAddNew(false);
                    props.refresh();
                    alert("New Item Created");
                } else {
                    alert("Item Already Exist!")
                }
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
                    <Heading as='h5' size='xs' color="muted" mb="5"><b><i className="bx bx-briefcase"></i><span className="ml-2">Items / Add New</span></b></Heading>
                    <Box
                        bg="bg-surface"
                        boxShadow='sm'
                        borderRadius="lg"
                        p={{
                            base: '4',
                            md: '6',
                        }}
                    >
                        <form onSubmit={saveItem}>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <Text fontSize="sm" color="muted">Item Name <span className="job-apply-char2">*</span></Text>
                                    <Input type="text" name="name" value={name}
                                        onChange={onChange1} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                                </div>
                                <div className="form-group col-6">
                                    <Text fontSize="sm" color="muted">Category <span className="job-apply-char2">*</span></Text>
                                    <div style={{ zIndex: "9999" }}>
                                        <Select value={category} onChange={onFilter} options={options} styles={customStyles} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <Text fontSize="sm" color="muted">Price <span className="job-apply-char2">*</span></Text>
                                    <Input type="number" name="price" value={price}
                                        onChange={onChange3} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                                </div>
                                <div className="form-group col-6">
                                    <Text fontSize="sm" color="muted">Quantity <span className="job-apply-char2">*</span></Text>
                                    <Input type="number" name="quantity" value={quantity}
                                        onChange={onChange4} required="required" style={{ borderRadius: "5px", height: "2.5rem" }} />
                                </div>
                            </div>
                            <Button type="submit" backgroundColor="blue" color="white" variant='solid' borderRadius="2" size="lg" marginRight="1rem">
                                Save
                            </Button>
                            <Button variant='outline' borderRadius="2" border="2px" size="lg" borderColor="grey" type="button" onClick={() => props.setshowAddNew(false)}>
                                Cancel
                            </Button>
                        </form>
                    </Box>
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default AddNewItems;