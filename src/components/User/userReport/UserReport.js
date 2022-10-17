import React, { useEffect, useState } from "react";
import "./UserReport.css";
import axios from "axios";
import jspdf from "jspdf";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBar from "../../Layout/sidebar/sidebar";
import SoloAlert from "soloalert";

const UserReport = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/users/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        //console.log(data);
      });
  }, []);

  //handle delete function
  async function handleDelete(id) {
    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          const result = await (
            await axios.delete(`http://localhost:8000/users/${id}`)
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location.reload();
              },
            });
          }
        } catch (err) {
          SoloAlert.alert({
            title: "Oops!",
            body: "Something went wrong",
            icon: "error",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }

  const generatePDF = (user) => {
    const doc = new jspdf();
    const tableColumn = ["User's Name", "Email", "Role", "Account Created"];

    const tableRows = [];
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    user.data.map((user) => {
      const userData = [user.name, user.email, user.isAdmin, user.createdAt];

      tableRows.push(userData);
    });
    // doc.text("Presentation Marks Report", 14, 16).setFontSize(13);
    doc.text(`Date - ${dateStr}`, 14, 23);

    //right down width height

    // doc.addImage(img, "JPEG", 170, 8, 25, 25);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 10 },
      startY: 35,
    });

    // doc.addImage(img1, "JPEG", 120, 140, 70, 40);
    doc.save("Users.pdf");
  };

  return (
    <div
      class="registration-form"
      style={{ justifyContent: "center", display: "flex" }}
    >
      <SideBar />
      <div style={{ backgroundColor: "#dfe3e9", width: "82%" }}>
        <div className="container">
          <br />
          <br />
          <Button
            variant="primary"
            onClick={() => {
              generatePDF(user);
            }}
          >
            Download Report
          </Button>
          <br />
          <br />
          <h3 className="bg-dark text-white p-3">Users Table</h3>
          <br />
          <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-6">
                <div class="form">
                  {/* <i class="fa fa-search"></i> */}
                  <input
                    type="text"
                    class="form-control form-input"
                    placeholder="Search User..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <br />
                  {/* <span class="left-pan">
                    <i class="fa fa-microphone"></i>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          <div shadow="0" border="info" background="white">
            <div>
              <div>
                <div className="table-responsive">
                  <table className="table table-striped table-hover table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>User's Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Account Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.data ? (
                        user.data
                          .filter((item) => {
                            if (search == "") {
                              return item;
                            } else if (
                              item.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return item;
                            }
                          })
                          .map((item) => {
                            return (
                              <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.isAdmin}</td>
                                <td>{item.createdAt}</td>
                                <td style={{ minWidth: 190 }}>
                                  <Button
                                    size="sm"
                                    variant="danger"
                                    style={{
                                      marginLeft: "120px",
                                      paddingLeft: "40px",
                                      paddingRight: "40px",
                                    }}
                                    onClick={(e) => {
                                      handleDelete(item._id);
                                    }}
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })
                      ) : (
                        <div></div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReport;
