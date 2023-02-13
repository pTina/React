import './EntranceTest.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useState } from 'react';



const EntranceTest = () => {
    const [items, setItems] = useState([

    ]);

    const TestItemContext = React.createContext()

    const TestItem = items.map((obj, idx)=> {
        return (
            <ListItem key={idx}>
                <TextField
                    label="이름"
                    required
                    fullWidth
                    name={`name${idx}`}
                />
                <TextField
                    label="성적"
                    required
                    fullWidth
                    name={`score${idx}`}
                />
                <TextField
                    label="인지유형"
                    required
                    fullWidth
                    name={`personalType${idx}`}
                />
            </ListItem>
        )
    })

    const addItem = () => {
        const newItem = '';
        setItems([...items, newItem]);
    }

    const GetReportCard = ()=>{

        // const temp = items.slice();
        // temp.forEach((obj, idx)=>{
        //     const $listItem = document.getElementById(`testItem${idx}`);
        //     for(const child of $listItem.children){

        //         console.log(child);
        //     }
        //     // obj.value.name = 
        // })
    }
    
    const ReportItem = ()=>{
        // return(
        //     <ListItem key={idx}>
        //         <Button></Button>
        //     </ListItem>
        // )
    }

    return (
        <Box
            component="form"
            sx={{
                width: "1",
                mt: "3px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: "1",
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    justifyContent: "space-around"
                }}
            >
                <Typography component="h1">학생 이름</Typography>
                <Typography component="h1">성적</Typography>
                <Typography component="h1">인지유형</Typography>
            </Box>

            <List className="ListItemWrap"
                sx={{ 
                    width: "1",
                    maxHeight: "290px",
                    overflow: "hidden",
                    overflowY: "scroll"
                }}
            >
                {TestItem}
            </List>

            <IconButton onClick={addItem}>
                <AddCircleOutlineIcon sx={{ fontSize: 35 }} ></AddCircleOutlineIcon>
            </IconButton>

            <Button 
                variant="contained"
                onClick={GetReportCard}
            >입학 성적표 만들기</Button>

            <Box>
                <List>
                    {ReportItem()}
                </List>
                <Box>

                </Box>
            </Box>

        </Box>

    );
}

export default EntranceTest;