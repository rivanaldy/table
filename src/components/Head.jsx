import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Select, Button } from "@chakra-ui/react";
function Head({onSearc}) {
  const[search,setSearch]=useState('')
  const handleSearch = () => {
    onSearc(search);
  };
  return (
    <div className="flex gap-5">
      <Input
      value={search}
        onChange={(e) => setSearch(e.target.value)}
        width={680}
        placeholder="Search customer code, name, station"
      ></Input>
      <Select width={193} placeholder="status">
        <option value="option1">ARN</option>
        <option value="option2">Active</option>
      </Select>
      <Button width={190} colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default Head;
