export class ClientProject {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    projectName: string
    startDate: string
    expectedEndDate: string
    clientName: string
    clientProjectId: number

    constructor(){
        this.empName = '';
        this.empId = 0;
        this.empCode = '';
        this.empEmailId = '';
        this.empDesignation = '';
        this.projectName = '';
        this.startDate = '';
        this.expectedEndDate = '';
        this.clientName = '';
        this.clientProjectId = 0;
    }
}