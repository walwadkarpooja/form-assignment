sap.ui.define([
    "sap/ui/core/mvc/Controller",
    
], (Controller) => {
    "use strict";

    return Controller.extend("formassignment.controller.View1", {
        onInit() {
        },
        onSubmit(oEvent){
            let sName = this.getView().byId('sName').getValue()
            let sPhone = this.getView().byId('sPhone').getValue()
            let sDate = this.getView().byId('sDate').getValue()
 
            if(sName == ""){
                this.getView().byId('sName').setValueState('Error');
                this.getView().byId('sName').setValueStateText('Please Enter Name')
            }else{
                this.getView().byId('sName').setValueState(null);
                this.getView().byId('sName').setValueStateText(null)
            }

            if(sPhone == ""){
                this.getView().byId("sPhone").setValueState("Error");
                this.getView().byId('sPhone').setValueStateText('Please Enter Number')
            } else {
                this.getView().byId('sPhone').setValueState(null);
                this.getView().byId('sPhone').setValueStateText(null)
            }

            if(sDate == ""){
                this.getView().byId("sDate").setValueState("Error");
                this.getView().byId('sDate').setValueStateText('Please Enter Date of birth')
            } else {
                this.getView().byId('sDate').setValueState(null);
                this.getView().byId('sDate').setValueStateText(null)
            }

            if(sName !== "" && sPhone !== "" && sDate !== ""){
                oEvent.oSource.setProperty("type" ,"Success");
                oEvent.oSource.setProperty("text" ,"Submitted");
                sap.m.MessageToast.show("Successfully submitted Information", {
                    my: "center top",             
                    at: "center top",           
                });
                this.getView().byId('sName').setValue('');
                this.getView().byId('sPhone').setValue('');
                this.getView().byId('sDate').setValue('');
            }

        }
    });
});