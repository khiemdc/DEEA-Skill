import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    constructor() {
        this.employees = [
            {
                id: 'emp101', name: 'ChristopherWhitlock', team: 'Green', title: 'PSM,SSM', email: 'whitlockc@deea.thebuffalogroup.com',
                appBuild: 'SpendPlan', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp102', name: 'BinayMishra', team: 'Blue', title: 'Developer', email: 'mishrab@deea.thebuffalogroup.com', 
                appBuild: 'Roma', company: 'FalconLogic'
            },
            {
                id: 'emp103', name: 'BrianEwens', team: 'Green', title: 'Developer', email: 'wensb@deea.thebuffalogroup.com',
                appBuild: 'SpendPlan', company: 'iSenpai'
            },
            {
                id: 'emp104', name: 'Steven',  team: 'Green', title: 'Developer', appBuild: 'SpendPlan', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp104', name: 'WilliamBoggs', team: 'Blue', title: 'Developer', email: 'boggsw@deea.thebuffalogroup.com',  
                appBuild: 'Roma', company: 'FalconLogic'
            },
            {
                id: 'emp105', name: 'JacobJones',  team: 'Red', title: 'Developer', email: 'jonesj@deea.thebuffalogroup.com',
                appBuild: 'Chrome', company: 'iSenpai'
            },
            {
                id: 'emp106', name: 'Jordan',  team: 'Red', appBuild: 'Chrome', company: 'iSenpai'
            },
            {
                id: 'emp107', name: 'Nick',  team: 'Blue', title: 'Developer', email: 'nick@deea.thebuffalogroup.com',
                appBuild: 'CivPay', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp108', name: 'KhiemLe', team: 'Grean', title: 'Developer', email: 'lek@deea.thebuffalogroup.com',  
                appBuild: 'Thanos', company: 'FalconLogic'
            },
            {
                id: 'emp109', name: 'YetnayetKide', team: 'Green', title: 'Developer', email: 'kidey@deea.thebuffalogroup.com',  
                appBuild: 'BilletTracker', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp110', name: 'Andrea',  team: 'Red', appBuild: 'Chrome', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp111', name: 'JoonLee', team: 'Red', title: 'ScrumMaster', email: 'leej@deea.thebuffalogroup.com',  
                appBuild: 'CivPay', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp112', name: 'DavenBasra', team: 'Green', title: 'Developer', email: 'basrad@deea.thebuffalogroup.com',
                appBuild: 'Thanos', company: 'TheBuffaloGroup'
            },
            {
                id: 'emp113', name: 'JosephLongo', team: 'Green', title: 'Developer', email: 'longos@deea.thebuffalogroup.com',
                appBuild: 'SpendPlan', company: 'iSenpai'
            },
        ];
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getGreenEmployeesCount(): number {
        return this.employees.filter(e => e.team === 'Green').length;
    }

    getBlueEmployeesCount(): number {
        return this.employees.filter(e => e.team === 'Blue').length;
    }

    getRedEmployeesCount(): number {
        return this.employees.filter(e => e.team === 'Red').length;
    }


    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}