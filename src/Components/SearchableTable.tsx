// SearchableTable

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import SearchBar from "material-ui-search-bar";
import CarouselWithArrow from "./CarouselWithArrow";

interface Props {
    rows: Array<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    }>;
}

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

export function SearchableTable({ rows }: Props) {

    const [tableData, setTableData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState<any>([]);
    const [searched, setSearched] = useState<string>("");
    const classes = useStyles();

    const requestSearch = (searchedVal: string) => {
        // id, name, email, phone
        let filterData = tableData.filter((value: any) => {
            return value.id.toString().toLowerCase().includes(searchedVal.toLowerCase()) || value.name.toString().toLowerCase().includes(searchedVal.toLowerCase()) || value.email.toString().toLowerCase().includes(searchedVal.toLowerCase()) || value.phone.toString().toLowerCase().includes(searchedVal.toLowerCase())
        });
        console.log("filterData", filterData);
        setFilteredData(filterData);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            // console.log("api response", response.data);
            setTableData(response.data);
        })
            .catch(error => {
                console.log(error);
            })
    })

    return (
        <div>
            {/* <CarouselWithArrow/> */}
        <Paper>
            <SearchBar
          value={searched}
          onChange={(searchVal:string) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {filteredData.length > 0 ?
                        filteredData.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                            </TableRow>
                        ))
                        :
                        tableData.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Paper>
        </div>
    );
}