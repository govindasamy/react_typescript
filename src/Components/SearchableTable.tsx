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
    const [searched, setSearched] = useState<string>("");
    const classes = useStyles();

    const requestSearch = (searchedVal: any) => {
        
        const filteredRows = tableData.filter((row:any) => {
            console.log(searchedVal);
            return row.id.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ;
            // || row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) || row.email.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) || row.phone.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
            // console.log(result);
            // return result;
        });
        console.log("filteredRows", filteredRows);
        setTableData(filteredRows);
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
                    {tableData.map((row: any) => (
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
    );
}