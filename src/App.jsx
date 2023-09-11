import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Table from './components/Table'

function App() {
const [search,setSearch]=useState('')
const data = [
  {
    customerType: "Agent",
    customerCode: 8047192438,
    customerName: "EXPEDITORS INTERNATIONAL",
    c2k: "EXP",
    status: "ARN",
    totalUser: 1,
  },
  {
    customerType: "Customer",
    customerCode: 1234567890,
    customerName: "ABC Corporation",
    c2k: "ABC",
    status: "Active",
    totalUser: 5,
  },
  {
    customerType: "Agent",
    customerCode: 9876543210,
    customerName: "XYZ Logistics",
    c2k: "XYZ",
    status: "ARN",
    totalUser: 2,
  },
  {
    customerType: "Customer",
    customerCode: 5555555555,
    customerName: "Sample Inc.",
    c2k: "SMP",
    status: "Active",
    totalUser: 3,
  },
  {
    customerType: "Agent",
    customerCode: 1111111111,
    customerName: "Global Shipping",
    c2k: "GSH",
    status: "ARN",
    totalUser: 4,
  },
  {
    customerType: "Customer",
    customerCode: 2222222222,
    customerName: "LogiCo",
    c2k: "LC",
    status: "Active",
    totalUser: 2,
  },
  {
    customerType: "Agent",
    customerCode: 3333333333,
    customerName: "Freight World",
    c2k: "FW",
    status: "ARN",
    totalUser: 1,
  },
  {
    customerType: "Customer",
    customerCode: 4444444444,
    customerName: "Cargo Express",
    c2k: "CE",
    status: "Active",
    totalUser: 7,
  },
  {
    customerType: "Agent",
    customerCode: 5555555555,
    customerName: "Logistics Plus",
    c2k: "LP",
    status: "ARN",
    totalUser: 3,
  },
  {
    customerType: "Customer",
    customerCode: 6666666666,
    customerName: "Fast Shipping",
    c2k: "FS",
    status: "Active",
    totalUser: 2,
  },
  {
    customerType: "Agent",
    customerCode: 7777777777,
    customerName: "Transworld Logistics",
    c2k: "TWL",
    status: "ARN",
    totalUser: 6,
  },
  {
    customerType: "Customer",
    customerCode: 8888888888,
    customerName: "Swift Transport",
    c2k: "SWT",
    status: "Active",
    totalUser: 1,
  },
  {
    customerType: "Agent",
    customerCode: 9999999999,
    customerName: "Express Cargo",
    c2k: "EXC",
    status: "ARN",
    totalUser: 5,
  },
  {
    customerType: "Customer",
    customerCode: 1212121212,
    customerName: "Logistics Ltd.",
    c2k: "LL",
    status: "Active",
    totalUser: 4,
  },
  {
    customerType: "Agent",
    customerCode: 3434343434,
    customerName: "Global Forwarders",
    c2k: "GF",
    status: "ARN",
    totalUser: 3,
  },
  {
    customerType: "Customer",
    customerCode: 5656565656,
    customerName: "Cargo Solutions",
    c2k: "CS",
    status: "Active",
    totalUser: 2,
  },
  {
    customerType: "Agent",
    customerCode: 7878787878,
    customerName: "Airfreight Express",
    c2k: "AE",
    status: "ARN",
    totalUser: 1,
  },
  {
    customerType: "Customer",
    customerCode: 9999999999,
    customerName: "Trans Logistics",
    c2k: "TL",
    status: "Active",
    totalUser: 3,
  },
  {
    customerType: "Agent",
    customerCode: 1010101010,
    customerName: "Ocean Shipping",
    c2k: "OS",
    status: "ARN",
    totalUser: 2,
  },
  {
    customerType: "Customer",
    customerCode: 1212121212,
    customerName: "Cargo Express",
    c2k: "CE",
    status: "Active",
    totalUser: 4,
  },
];
  return (
    <>
    <Head onSearc={(e)=>setSearch(e)}/>
      <Table data={data} search={search}/>
    </>
  )
}

export default App
