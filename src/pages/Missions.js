import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function Missions() {
  return (
    <div className="table-container">
      <Table striped className="main-table my-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates
              the Thaicom satellite fleet and other telecommunication businesses
              in Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates
              the Thaicom satellite fleet and other telecommunication businesses
              in Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Thaicom</td>
            <td>
              Thaicom is the name of a series of communications satellites
              operated from Thailand, and also the name of Thaicom Public
              Company Limited, which is the company that owns and operates
              the Thaicom satellite fleet and other telecommunication businesses
              in Thailand and throughout the Asia-Pacific region. The satellite
              projects were named Thaicom by the King of Thailand, His Majesty
              the King Bhumibol Adulyadej, as a symbol of the linkage between
              Thailand and modern communications technology.
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
