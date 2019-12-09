import React from 'react';
import { Button } from 'fundamental-react/Button';
import { Table } from 'fundamental-react/Table';
import { Panel } from 'fundamental-react/Panel';
import { Icon } from 'fundamental-react/Icon';

import { getIsAllowed } from '../httpService/service';


function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};



export class MyTable extends React.Component {

    componentDidMount() {
        (async () => {
            let [ViewAllServiceOrders, ViewCustomerData, CreateServiceOrder, ViewServiceOrdersAssignedToMe] = await Promise.all([getIsAllowed(window.sessionStorage.getItem("id_token"), "ViewAllServiceOrders", "SAP Service Cloud"), getIsAllowed(window.sessionStorage.getItem("id_token"), "ViewCustomerData", "SAP Service Cloud"), getIsAllowed(window.sessionStorage.getItem("id_token"), "CreateServiceOrder", "SAP Service Cloud"), getIsAllowed(window.sessionStorage.getItem("id_token"), "ViewServiceOrdersAssignedToMe", "SAP Service Cloud")])
            this.setState({ ViewAllServiceOrders: ViewAllServiceOrders })
            this.setState({ ViewCustomerData: ViewCustomerData })
            this.setState({ CreateServiceOrder: CreateServiceOrder })
            this.setState({ ViewServiceOrdersAssignedToMe: ViewServiceOrdersAssignedToMe })
        })()
    }

    render() {
        let duser = parseJwt(window.sessionStorage.getItem("id_token")) && parseJwt(window.sessionStorage.getItem("id_token"))["login_name"]
        console.log(this.state)
        return (
            this.state && <Panel style={{ width: "100%" }}>
                <Panel.Header>
                    <Icon
                        glyph="order"
                        size="l"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <Panel.Head
                        title="Service Orders"
                        description=""
                    />
                    {this.state.CreateServiceOrder && <Panel.Actions>
                        <div style={{ display: "flex" }}>
                            <Button>Add new</Button>
                        </div>
                    </Panel.Actions>}
                </Panel.Header >
                <Panel.Body style={{ background: "#edeff0" }}>
                    <Table
                        headers={this.state.ViewCustomerData ? [
                            'Date Opened',
                            'Assigned Engineer',
                            'Customer',
                            'Customer Contact Phone',
                        ] :
                            [
                                'Date Opened',
                                'Assigned Engineer',
                            ]}
                        tableData={
                            this.state.ViewAllServiceOrders ? data.map(row => {
                                return {
                                    "rowData": this.state.ViewCustomerData ? [
                                        row.opened,
                                        row.assignee,
                                        row.customer,
                                        row.phone,
                                    ] :
                                        [
                                            row.opened,
                                            row.assignee,
                                        ]
                                }
                            }) :
                                this.state.ViewServiceOrdersAssignedToMe ? data.filter(row => row.assignee === duser).map(row => {
                                    return {
                                        "rowData": this.state.ViewCustomerData ? [
                                            row.opened,
                                            row.assignee,
                                            row.customer,
                                            row.phone,
                                        ] :
                                            [
                                                row.opened,
                                                row.assignee,
                                            ]
                                    }
                                })
                                    :
                                    []
                        }
                    />
                </Panel.Body>
            </Panel >
        )
    }
}


var data = [
    {
        opened: new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(new Date().getTime() - 24 * 3600 * 1000)),
        assignee: 'D0111111',
        customer: 'Volkswagen',
        phone: '+49 0123456789'
    },
    {
        opened: new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(new Date().getTime() - 48 * 3600 * 1000)),
        assignee: 'D067044',
        customer: 'Nestle',
        phone: '+49 9876543210'
    },
    {
        opened: new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(new Date().getTime() - 72 * 3600 * 1000)),
        assignee: 'D0111111',
        customer: 'Nestle',
        phone: '+49 9876543210'
    },
    {
        opened: new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(new Date().getTime() - 96 * 3600 * 1000)),
        assignee: 'D067044',
        customer: 'Volkswagen',
        phone: '+49 0123456789'
    },
]