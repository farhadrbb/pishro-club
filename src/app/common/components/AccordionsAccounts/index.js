import React, { useRef, useEffect } from "react";
import "./index.scss";
import { FilterNone } from "@material-ui/icons";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(theme => ({
  title: {
    // textAlign: "center",
  },
  text: {
    // fontSize: theme.fontSize.xLarge,
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginBottom: 80,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
      // margin: 'auto',
    }
  },
  svg: {
    width: 17,
    height: 17,
    display: "block",
    margin: "auto",
    position: "absolute",
    bottom: -30,
    right: "calc(56% - 8.5px)",
    // fill: theme.palette.light.type2,
    [theme.breakpoints.down("sm")]: {
      right: "calc(50% - 8.5px)",
      left: "auto!important"
    }
  },
  bottomRight: {
    left: 0
  },
  // bottomCenter: {
  //     right: "calc(50% - 8px)",
  // },
  centerRight: {
    top: 9,
    left: -20
  }
}));
export default function Index({ accountName, data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let AcoordinRef = useRef();

  const handelClick = () => {
    let elem = AcoordinRef.current;

    elem.classList.toggle("active");
    let panel = elem.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.paddingBottom = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 10 + "px";
      panel.style.paddingBottom = 10 + "px";
    }
  };

  // useEffect(() => {
  //   let elem = AcoordinRef.current;
  //   let panel = elem.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //     panel.style.paddingBottom = null;
  //   }
  // }, [data]);

  return (
    // <div className={'crad_Accordion'}>
    //     <button className="accordion_accounts" ref={AcoordinRef} onClick={()=>handelClick()}>
    //         <div>
    //             {accountName}
    //         </div>
    //         <div>
    //             <svg className={'icon'}>
    //                 <use xlinkHref='/sprite.svg#arrow-down'></use>
    //             </svg>
    //         </div>
    //     </button>
    //     <div className="panel_accounts d-flex justify-content-center align-self-center flex-wrap ">
    //         {
    //             JSON.parse(data.body.content)
    //                 .filter(item => item.Group === accountName)
    //                 .map((item, index) => {
    //                     return (
    //                         <CardAccounts key={index} data={item} />
    //                     )
    //                 })
    //         }
    //     </div>
    // </div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, ind) => (
                <TableCell
                  key={ind}
                  align={column.id === "phone" ? "right" : "center"}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          dir="ltr"
                        >
                          {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                          {value}
                          {row.internal && column.id === "phone" && (
                            <>
                              <span dir="ltr"> داخلی</span>
                              <span dir="ltr"> {row.internal}</span>
                            </>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

// function CardAccounts({ data }) {
//   const accountRef = React.useRef();
//   const shebaRef = React.useRef();
//
//   const handleCopyLink = elem => {
//     var copyText = elem.current;
//
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */
//
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
//
//     /* Alert the copied text */
//     // alert("Copied the text: " + copyText.value);
//   };
//
//   return (
//     <div className={"CardAccounts p-4 m-5 shadow text-center rounded "}>
//       <div className={"mt-5 mb-5"}>
//         <h3>{data.Bank}</h3>
//       </div>
//       <div className={"mt-5 mb-5"}>
//         <p>
//           <span>شماره حساب</span>
//           <span className={"ml-2"}>
//             <FilterNone onClick={() => handleCopyLink(accountRef)} />{" "}
//           </span>
//         </p>
//         <input
//           className={"input"}
//           value={data.Number}
//           type={"text"}
//           ref={accountRef}
//           onChange={() => {
//             return null;
//           }}
//         />
//       </div>
//       <div className={"mt-5 mb-5"}>
//         <p>
//           <span>شبا</span>
//           <span className={"ml-2"}>
//             <FilterNone onClick={() => handleCopyLink(shebaRef)} />{" "}
//           </span>
//         </p>
//         <input
//           className={"input"}
//           value={data.Sheba}
//           type={"text"}
//           ref={shebaRef}
//           onChange={() => {
//             return null;
//           }}
//         />
//       </div>
//     </div>
//   );
// }
const columns = [
  { id: "bank", label: "بانک", minWidth: 170, align: "center" },
  { id: "branch", label: "شعبه", minWidth: 170, align: "center" },
  { id: "acountNumber", label: "شماره حساب", minWidth: 170, align: "center" },
  { id: "shaba", label: "شبا", minWidth: 100, align: "center" }
];

let rows = [
  {
    bank: "ملی",
    branch: "بورس اوراق بهادر",
    acountNumber: "0105639913000",
    shaba: " IR92 0170 0000 0010 5639 9130 00"
  },
  {
    bank: "سامان",
    branch: "سی تیر",
    acountNumber: "849-40-50440-1",
    shaba: "IR61 0560 0849 0400 0050 4400 01"
  },
  {
    bank: "ملت",
    branch: "حافظ بورس",
    acountNumber: "21431285.29",
    shaba: "IR94 0120 0000 0000 2143 1285 29"
  },
  {
    bank: "پارسیان",
    branch: "آپادانا",
    acountNumber: "20100429598604",
    shaba: "IR39 0540 1055 2010 0429 5986 04"
  },
  {
    bank: "تجارت",
    branch: "تخصصی بورس",
    acountNumber: "104350186",
    shaba: "IR26 0180 0000 0000 0104 3501 86"
  },
  {
    bank: "شهر",
    branch: "دولت",
    acountNumber: "1001000532914",
    shaba: "IR57 0610 0000 0100 1000 5329 14"
  },
  {
    bank: "دی",
    branch: "میدان ونک",
    acountNumber: "105505176005",
    shaba: "IR09 0660 0000 0010 5505 1760 05"
  }
];
