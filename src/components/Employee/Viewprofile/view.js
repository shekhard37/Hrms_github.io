import React from 'react'

export default function view() {
  return (
    <div class="container">
<div id="content" class="content p-0">
    <div class="profile-header">
        <div class="profile-header-cover"></div>

        <div class="profile-header-content">
            <div class="profile-header-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
            </div>

            <div class="profile-header-info">
                <h4 class="m-t-sm">Abhishek Shekhar</h4>
                <p class="m-b-sm">UXUI + Frontend Developer</p>
                <a href="#" class="btn btn-xs btn-primary mb-3">Edit Profile</a>
            </div>
        </div>
    </div>

    
                        <table class="table table-profile">
                            <thead>
                                <tr>
                                    <th colspan="2">CONTACT INFORMATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="field">Mobile Phones</td>
                                    <td class="value">
                                      +91 6239583703
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Email</td>
                                    <td class="value">
                                        Abhsihek@infinite.com
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                
                                
                                <tr>
                                    <td class="field">Address</td>
                                    <td class="value">
                                        Near Tekari, Gaya<br />
                                        Bihar,824207
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-profile">
                            <thead>
                                <tr>
                                    <th colspan="2">BASIC INFORMATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="field">Birth of Date</td>
                                    <td class="value">
                                        November 4, 1989
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Gender</td>
                                    <td class="value">
                                        Male
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            
)
}

