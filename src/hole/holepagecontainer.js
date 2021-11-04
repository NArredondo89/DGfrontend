// import React, { useState, useEffect } from 'react';

// import { Card, Table, Grid, Segment } from 'bootstrap-react';

// import { NavLink } from 'react-router-dom';

// import { HoleModel } from '../../models';

// const HolePageContainer = () => {
//   const [hole, setHole] = useState([{}]);

//   const fetchHole = (props) => {
//     HoleModel.all().then((res) => {
//       // console.log(res)
//       setHole(res.hole);
//     });
//   };

//   useEffect(function () {
//     fetchHole();
//   }, []);

//   let number = hole.map((singlehole) => {
//     console.log(singlehole, 'show page table');
//     return (
//       <Table.Cell>
//         {
//           <NavLink to={`/hole/${singlehole._id}/edit`}>
//             {singlehole.hole}
//           </NavLink>
//         }
//       </Table.Cell>
//     );
//   });

//   let feet = hole.map((singlehole) => {
//     return <th>{singlehole.feet}</th>;
//   });

//   let par = hole.map((singlehole) => {
//     return <th>{singlehole.par}</th>;
//   });

//   let mandos = hole.map((singlehole) => {
//     return <th>{singlehole.mandos}</th>;
//   });

//   let outOfBounds = hole.map((singlehole) => {
//     return <th>{singlehole.outOfBounds}</th>;
//   });

//   let hazzards = hole.map((singlehole) => {
//     return <th>{singlehole.hazzards}</th>;
//   });

//   return (
//     <div>
//       <Segment>
//         <Grid.Row>
//           <Table celled>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>HOLE</Table.Cell>
//                 {number}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>FEET</Table.Cell>
//                 {feet}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>Mandos</Table.Cell>
//                 {feet}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>PAR</Table.Cell>
//                 {par}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>PAR</Table.Cell>
//                 {mandos}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>PAR</Table.Cell>
//                 {outOfBounds}
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>PAR</Table.Cell>
//                 {hazzards}
//               </Table.Row>
//             </Table.Body>
//           </Table>
//         </Grid.Row>
//         <Grid.Row></Grid.Row>
//       </Segment>
//     </div>
//   );
// };

// export default HolePageContainer;
