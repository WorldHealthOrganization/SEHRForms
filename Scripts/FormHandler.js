    var beneficiaries = [];
    var conRequestYesResponses = [];

    var ConFormConfig = {
        listName: "ConRequests",
        fillFlowUrl: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/0f33cd0a95a5404ebc159938b62faa8e/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Tg7c6coQS8863YnQ_hjK7kMjuOujm0M2nEwh0_KMtIY",
        updateFlowUrl: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3ea4771e29fa47d88e6deb02ab4e6343/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=A4L_YwDU1Vp46zqH1t8cCkVT8jHkaNyV8FtR694FsBo",
        generatePDFFlowURL: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/929f49fe71544d97b1194bb298bbf7d7/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YXtETvTQkrKYrTSjXW2yxijil2iWUXmxPnEbASLeMgE",
        fillBeneficiariesFlowUrl: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ba2d7488a68444fda44e3bff2d8f7ba1/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FlAeS8CytDupMx5ChaTVbqlYGMFWvFs_7h_rjUEz8jY",
        getConRequestYesResponse: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/00/workflows/abb9b99c361c4c8cb19c5eacadf0e7b7/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nZ2TWfiKY3HvhU4gvzM8-gQ3y-GV2KX5mIa1ay010Nw",
        saveConRequestYesResponses: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/25/workflows/1189b5cb063741eeb768e0504733662f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OG-uDieTOHioVuoyYdTRF-rsampSn7Pvfi-r0D7LVh0",
        saveBeneficiariesFlowUrl: "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/31/workflows/aa9ebce1e3854f3caa885a607a8d8984/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LANPHnmpjjO5j5nZtVsGfc20QxxW5n8rTgIgHBA-_XM"
    };

    var ConFormColumns = [
    "P1FullName",
    "P1DateOfBirth",
    "P1DesgSignDate",
    "P1WitSignDate",
    "P1WitName",
    "P1WitAddress",
    "P2Name",
    "P2AffiInstitue",
    "P2Email",
    "P2ContractType",
    "P2TORRecv",
    "P2PlannedDuration",
    "P2FullPartTime",
    "P2WorkTitle",
    "P2Q1",
    "P2Q21",
    "P2Q22",
    "P2Q23",
    "P2Q31",
    "P2Q32",
    "P2Q41",
    "P2Q42",
    "P2Q51",
    "P2Q52",
    "P2Q6",
    "P2Q7",
    "P2Q8",
    "P2Q9",
    "P2Q10",
    "P2Q11",
    "P2Q12",
    "P2Q13",
    "P2Q14",
    "P2Q15",
    "P2ExplainDetail",
    "P2ExplainOrgName",
    "P2ExplainBelongs",
    "P2ExplainValue",
    "P2ExplainInterest",
    "P2ExplainOther",
    "P2ExplainAddProceedings",
    "P2DecDate",
    "P2DecName",
    "P2DecSign",
    "P2ResOffRev1",
    "P2ResOffRev2",
    "P2ResOffRev3",
    "P2ResOffRevAdvice",
    "P2ResOffRevHiring",
    "P2ResOffRevMitigated",
    "P2ResOffRevNotComp",
    "P2ResOffRevNFR",
    "P2ResOffRevDate",
    "P2ResOffRevName",
    "P2ResOffRevSign",
    "P3FamilyName",
    "P3MaidenName",
    "P3GivenName",
    "P3Gender",
    "P3DateOfBirth",
    "P3Nationality",
    "P3Street",
    "P3City",
    "P3ZipCode",
    "P3State",
    "P3Country",
    "P3Email",
    "P3WADescription",
    "P3WALocation",
    "P3ExpFromDate",
    "P3ExpToDate",
    "WFRun"
];

var ConFormDateColumns = [
    "P1DateOfBirth",
    "P1DesgSignDate",
    "P1WitSignDate",
    "P2DecDate",
    "P2ResOffRevDate",
    "P3DateOfBirth",
    "P3ExpFromDate",
    "P3ExpToDate"
];

var ConFormMandatoryFields = [
    { id: "P1FullName", label: "Form 1 - I (First name, Middle name, Family Name)" },
    { id: "P1DateOfBirth", label: "Form 1 - Date of Birth" },
    { id: "P1DesgSignDate", label: "Form 1 - Date" },
    { id: "P1WitSignDate", label: "Form 1 - Signatures of witness date" },
    { id: "P1WitName", label: "Form 1 - NAME (BLOCK LETTERS)" },
    { id: "P1WitAddress", label: "Form 1 - Address of Witness" },

    { id: "P2Name", label: "Form 3 - Name" },
    { id: "P2AffiInstitue", label: "Form 3 - Affiliated institution(s)" },
    { id: "P2Email", label: "Form 3 - Email" },
    { id: "P2ContractType", label: "Form 3 - Type of contract" },
    { id: "P2TORRecv", label: "Form 3 - Terms of Reference received", type: "radio" },
    { id: "P2PlannedDuration", label: "Form 3 - Planned duration" },
    { id: "P2WorkTitle", label: "Form 3 - Title of work to be performed" },

    { id: "P2DecDate", label: "Form 3 - Declaration Date" },
    { id: "P2DecName", label: "Form 3 - Declaration Name" },
    { id: "P2DecSign", label: "Form 3 - Declaration Signature" },

    { id: "P3FamilyName", label: "Form 2 - Family Name" },
    { id: "P3GivenName", label: "Form 2 - Given Name" },
    { id: "P3DateOfBirth", label: "Form 2 - Date of Birth" },
    { id: "P3Gender", label: "Form 2 - Gender", type: "radio" },
    { id: "P3Nationality", label: "Form 2 - Nationality" },
    { id: "P3Street", label: "Form 2 - Street" },
    { id: "P3City", label: "Form 2 - City" },
    { id: "P3Country", label: "Form 2 - Country" },
    { id: "P3Email", label: "Form 2 - Email address" },
    { id: "P3WADescription", label: "Form 2 - Description of work assignment" },
    { id: "P3WALocation", label: "Form 2 - Location of work assignment" },
    { id: "P3ExpFromDate", label: "Form 2 - Expected dates, from" },
    { id: "P3ExpToDate", label: "Form 2 - Expected dates, to" }
];

var ConFormQuestionFields = [
    "P2Q1",
    "P2Q21",
    "P2Q22",
    "P2Q23",
    "P2Q31",
    "P2Q32",
    "P2Q41",
    "P2Q42",
    "P2Q51",
    "P2Q52",
    "P2Q6",
    "P2Q7",
    "P2Q8",
    "P2Q9",
    "P2Q10",
    "P2Q11",
    "P2Q12",
    "P2Q13",
    "P2Q14",
    "P2Q15"
];

var ConFormYesExplanationFields = [
    { question: "P2Q1", rowId: "rowQ1", suffix: "Q1", display: "1" },
    { question: "P2Q21", rowId: "rowQ21", suffix: "Q21", display: "2.1" },
    { question: "P2Q22", rowId: "rowQ22", suffix: "Q22", display: "2.2" },
    { question: "P2Q23", rowId: "rowQ23", suffix: "Q23", display: "2.3" },
    { question: "P2Q31", rowId: "rowQ31", suffix: "Q31", display: "3.1" },
    { question: "P2Q32", rowId: "rowQ32", suffix: "Q32", display: "3.2" },
    { question: "P2Q41", rowId: "rowQ41", suffix: "Q41", display: "4.1" },
    { question: "P2Q42", rowId: "rowQ42", suffix: "Q42", display: "4.2" },
    { question: "P2Q51", rowId: "rowQ51", suffix: "Q51", display: "5.1" },
    { question: "P2Q52", rowId: "rowQ52", suffix: "Q52", display: "5.2" }
];

var ConFormYesExplanationColumns = [
    { prefix: "P2ExplainDetail", label: "Details of interest" },
    { prefix: "P2ExplainOrgName", label: "Name of organization/entity" },
    { prefix: "P2ExplainBelongs", label: "Interest belongs to" },
    { prefix: "P2ExplainValue", label: "Amount/value" },
    { prefix: "P2ExplainInterest", label: "Current interest" },
    { prefix: "P2ExplainOther", label: "Other details" }
];

let reviewStatus = {
    isSignedPDFUploaded: false,
    signedPDFFileName: "",
    validationPassed: false
};

var ConFormAccess = {
    mode: "",
    conId: "",
    token: "",
    isAdminRead: false,
    isConsultant: false
};

function getDateOnly(dateStringWithTime) {
   	// Extract the date portion
    var dateWithoutTime = dateStringWithTime.split('T')[0];

    // Create a new Date object without time
    var convertedDate = new Date(dateWithoutTime);
	return convertedDate;
}
    
$(document).ready(function () {

    if (!InitializeConFormAccess()) {
        return;
    }

    flatpickr(".flatpickr-date", {
        dateFormat: "d-M-Y",
        allowInput: false
    });

    $(".flatpickr-date").attr("readonly", true);
    
    FillFormData();
    FillBeneficiariesData();
    FillConRequestYesResponsesData();
    initializeValidatePrintWorkflow();

    ApplyConFormAccessMode();

    setSectionDisabled("sectionRespoOfficer", true);

    $('#frm input[type="button"]').click(function () {

        SaveFormData();

    });

    $("#btnSubmit").click(function () {
        if (ValidateFormData()) {
            //UpdateFormData();
            alert("Form data is valid. You can proceed to submit.");
        }
    });

    $("#btnSaveBeneficiary").click(function () {

        if ($("#txtBenName").val() == "") {
            alert("Name is required");
            return;

        }

        if (!GetFlatpickrControlDate($("#txtBenDOB"))) {
            alert("DOB is required");
            return;
        }
        else {
            const dob = $("#txtBenDOB").val();
            const selectedDate = flatpickr.parseDate(dob, "d-M-Y");

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate >= today) {
                alert("Date of Birth must be earlier than today.");
                $("#txtBenDOB").focus();
                return;
            }
        }

        if ($("#ddlSex").val() == "") {
            alert("Sex is required");
            return;
        }

        if ($("#txtRelationship").val() == "") {
            alert("Relationship is required");
            return;
        }

        if ($("#txtShare").val() == "") {
            alert("Share is required");
            return;
        }

        if ($("#txtBenAddress").val() == "") {
            alert("Address is required");
            return;
        }

        var obj = {
            Name: $("#txtBenName").val(),
            DOB: FormatFlatpickrDate(GetFlatpickrControlDate($("#txtBenDOB"))),
            Sex: $("#ddlSex").val(),
            Relationship: $("#txtRelationship").val(),
            Share: $("#txtShare").val(),
            Address: $("#txtBenAddress").val()
        };

        var row = $("#hdnRow").val();
        if (row == "") {
            beneficiaries.push(obj);
        }
        else {
            beneficiaries[row] = obj;
        }

        loadBeneficiaries();
        $("#hdnBeneficiariesJson").val(JSON.stringify(beneficiaries));

        HideModal("beneficiaryModal");
    });

    $("#btnAddBeneficiary").click(function () {
        $("#hdnRow").val("");
        $("#beneficiaryModal input").val("");
        $("#beneficiaryModal textarea").val("");
        SetFlatpickrControlDate($("#txtBenDOB"), "");
        $("#ddlSex").val("");
        $("#beneficiaryModal").modal("show");
    });

    $("#uploadSignedFormBtn").on("click", async function (event) {
        event.preventDefault();

        if (!reviewStatus.validationPassed) {
            showUploadMessage("warning", "Please validate the form before uploading the signed PDF.");
            return;
        }

        const conId = GetQueryStringValue("ConID");
        const fileInput = document.getElementById("signedFormUpload");
        const file = fileInput.files[0];

        if (!conId) {
        showUploadMessage("warning", "Please provide ConID.");
        return;
        }

        if (!file) {
        showUploadMessage("warning", "Please select a file to upload.");
        return;
        }

        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        showUploadMessage("warning", "File size must be " + MAX_FILE_SIZE_MB + " MB or less.");
        return;
        }

        setUploadLoading(true);
        showUploadMessage("info", "Preparing upload...");

        try {
        const fileContentBase64 = await readFileAsBase64(file);

        $.ajax({
            url: UPLOAD_FLOW_URL,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                conId: conId,
                fileName: file.name,
                fileContentBase64: fileContentBase64,
                contentType: file.type || "application/octet-stream"  
            }),
            success: function (response) {
            if (response && response.success === false) {
                showUploadMessage("danger", response.message || "Upload failed.");
                return;
            }

            showUploadMessage("success", response.message || "File uploaded successfully.");
            //$("#signedFormUploadForm")[0].reset();

            //set review status
            reviewStatus.isSignedPDFUploaded = true;
            reviewStatus.signedPDFFileName = file.name;

            $("#btnSubmitFinal").prop("disabled", false);
            alert("File uploaded successfully. You may now submit the form.");

            },
            error: function (xhr) {
            const message = xhr.responseJSON && xhr.responseJSON.message
                ? xhr.responseJSON.message
                : "Upload failed. Please try again.";
            showUploadMessage("danger", message);
            },
            complete: function () {
            setUploadLoading(false);
            }
        });
        } catch (error) {
        showUploadMessage("danger", error.message || "Unable to upload the file.");
        setUploadLoading(false);
        }
    });

    $('button[data-bs-target="#reviewSubmitPart"]').on("shown.bs.tab", function () {
        refreshReviewSubmitStatus();
    });

    $(document).on("click", '[data-next-tab="#reviewSubmitPart"]', function () {
        setTimeout(refreshReviewSubmitStatus, 200);
    });

    $('button[data-bs-target="#uploadSignedFormPart"]').on("show.bs.tab", function (event) {
        if (!reviewStatus.validationPassed) {
            event.preventDefault();
            refreshReviewSubmitStatus();
        }
    });

    $("#btnSaveForLater").on("click", function () {
        UpdateFormData("PC", {
            validate: false,
            successMessage: "Form saved successfully.",
            showAlert: true
        });
    });

    $("#btnSubmitFinal").on("click", function () {
        refreshReviewSubmitStatus();

        if (!reviewStatus.validationPassed) {
            showUploadMessage("danger", "Please complete all required fields before submitting.");
            return;
        }

        if (!reviewStatus.isSignedPDFUploaded) {
            showUploadMessage("danger", "Please upload the signed PDF before submitting.");
            return;
        }

        if (!confirm("Once submitted you cannot make any further changes in the form. Do you want to submit now?")) {
            return;
        }

        SubmitFinalForm();
    });

    //btnPrintPdf
    $(document).on("click", "#btnPrintPdf", async function (event) {
        event.preventDefault();

        if (!refreshReviewSubmitStatus()) {
            return;
        }

        try {
            $(this).prop("disabled", true).text("Generating PDF...");

            await downloadPdfFromBase64Flow();

        } catch (error) {
            console.error(error);
            alert("PDF generation failed.");
        } finally {
            $("#btnPrintPdf")
                .prop("disabled", false)
                .html('<i class="bi bi-file-earmark-pdf-fill me-1"></i>Print to PDF');
        }
    });

    $(document).on("change", "input[name='P2Q1']", function () {
        ToggleYesResponseRow('rowQ1', 'P2Q1');
    });

    $(document).on("change", "input[name='P2Q21']", function () {
        ToggleYesResponseRow('rowQ21', 'P2Q21');
    });

    $(document).on("change", "input[name='P2Q22']", function () {
        ToggleYesResponseRow('rowQ22', 'P2Q22');
    });

    $(document).on("change", "input[name='P2Q23']", function () {
        ToggleYesResponseRow('rowQ23', 'P2Q23');
    });

    $(document).on("change", "input[name='P2Q31']", function () {
        ToggleYesResponseRow('rowQ31', 'P2Q31');
    });

    $(document).on("change", "input[name='P2Q32']", function () {
        ToggleYesResponseRow('rowQ32', 'P2Q32');
    });

    $(document).on("change", "input[name='P2Q41']", function () {
        ToggleYesResponseRow('rowQ41', 'P2Q41');
    });

    $(document).on("change", "input[name='P2Q42']", function () {
        ToggleYesResponseRow('rowQ42', 'P2Q42');
    });

    $(document).on("change", "input[name='P2Q51']", function () {
        ToggleYesResponseRow('rowQ51', 'P2Q51');
    });

    $(document).on("change", "input[name='P2Q52']", function () {
        ToggleYesResponseRow('rowQ52', 'P2Q52');
    });

    
    $("#pageLoader").fadeOut(200);

    
});



function SaveFormDataTest() {
    if (!validateForm()) {
        return;
    }

    var flowURL = "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/d1fd630616224377abcc71d222d7cba2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NAFF53VnxagVPCjdEoFtPvTgfLOaKl7dIAedUo94jzI";

    var request = {
        Name: $('#name').val(),
        Email: $('#email').val(),
        Message: $('#message').val()
    };

    $.ajax({

        url: flowURL,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(request),
        success: function (result) {
            alert("Submitted Successfully.");
        },
        error: function (xhr) {
            console.log(xhr);
            alert("Submission Failed.");
        }
    });
}

function IsRequestAuthorized() {
    // Add your authorization logic here
    return true; // Placeholder - replace with actual authorization check
}

function FillFormDataTest() {
    if (!IsRequestAuthorized()) {
        alert("You are not authorized to fill this form.");
        return;
    }
}

function PrintForm() {
    

}

function UploadSignedPDF() {

}



function refreshReviewSubmitStatus() {
    const isFormValid = ValidateFormData();
   // const isFormValid = true;
   const isFileUploaded = reviewStatus.isSignedPDFUploaded === true;

    reviewStatus.validationPassed = isFormValid;
    //reviewStatus.validationPassed = true;

    if (isFormValid) {   
        $("#reviewValidationSummary")
            .removeClass("alert-danger")
            .addClass("alert-success")
            .removeClass("d-none")
            .html("Validation passed. You may print the PDF and continue to upload the signed form.");

        $("#btnPrintPdf, #btnGoToUploadSignedForm").removeClass("d-none");
        $("#uploadSignedFormTabItem").removeClass("d-none");
    } else {
        $("#reviewValidationSummary")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .removeClass("d-none");
            //.html("Validation failed. Please complete the required fields shown in the validation summary above.");

        $("#btnPrintPdf, #btnGoToUploadSignedForm").addClass("d-none");
        $("#uploadSignedFormTabItem").addClass("d-none");
    }

    $("#btnSubmitFinal").prop("disabled", !(isFormValid && isFileUploaded));

    return isFormValid;
}

function initializeValidatePrintWorkflow() {
    $("#btnPrintPdf, #btnGoToUploadSignedForm").addClass("d-none");
    $("#uploadSignedFormTabItem").addClass("d-none");
    $("#btnSubmitFinal").prop("disabled", true);
}

function ValidateFormData() {
    var errors = [];

    ClearConFormValidation();

    for (var i = 0; i < ConFormMandatoryFields.length; i++) {
        var field = ConFormMandatoryFields[i];

        if (field.type == "radio") {
            if (!GetRadioValue(field.id)) {
                errors.push(field.label + " is required.");
                MarkRadioInvalid(field.id);
            }
        } else if ($.trim($("#" + field.id).val()) == "") {
            errors.push(field.label + " is required.");
            MarkInvalid("#" + field.id);
        }
    }

    for (var q = 0; q < ConFormQuestionFields.length; q++) {
        var questionName = ConFormQuestionFields[q];

        if (!GetRadioValue(questionName)) {
            errors.push("Form 3 - Question " + GetQuestionDisplayNumber(questionName) + " must be answered Yes or No.");
            MarkRadioInvalid(questionName);
        }
    }

    ValidateYesExplanationRows(errors);

    if (!IsValidEmail($("#P2Email").val())) {
        errors.push("Form 3 - Email is not valid.");
        MarkInvalid("#P2Email");
    }

    if (!IsValidEmail($("#P3Email").val())) {
        errors.push("Form 3 - Email address is not valid.");
        MarkInvalid("#P3Email");
    }

    var beneficiaryShareTotal = GetBeneficiaryShareTotal();

    if (beneficiaries.length > 0 && Math.abs(beneficiaryShareTotal - 100) > 0.01) {
        errors.push("Form 1 - The sum of all beneficiary shares must be 100%. Current total is " + beneficiaryShareTotal + "%.");
        MarkInvalid("#tblBeneficiary");
    }

    if (errors.length > 0) {
        ShowConFormValidationErrors(errors);
        return false;
    }

    return true;
}

function AddFormData() {
    var conId = getGUID();
    var itemType = ListCommonService.GetItemTypeForListName(ConFormConfig.listName);
    var metadata = {
        __metadata: {
            type: itemType
        },
        Title: conId,
        ConEmail: "kumarl@who.int",
        Token: "",
        ConID: conId,
        Status: "PC",
        SubmittedById: _spPageContextInfo.userId,
        SubmittedOn: new Date().toISOString(),
        WFRun: "Yes"
    };

    return $.when(ListCommonService.AddItemToList(ConFormConfig.listName, metadata))
        .done(function () {
            SetQueryStringParameter("ConID", conId);
        });
}

function UpdateFormData(status, options) {
    options = options || {};
    status = status || "PC";

    if (options.validate !== false && !ValidateFormData()) {
        return false;
    }

    var conId = GetQueryStringValue("ConID");

    if (!conId) {
        ShowConFormValidationErrors(["ConID is missing from the query string."]);
        return false;
    }

    var payload = BuildConFormPayload();
    payload.ConID = conId;
    payload.Status = status;

    ShowProcessing();

    return $.ajax({
        url: AppendQueryString(ConFormConfig.updateFlowUrl, "ConID", conId),
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload)
    }).then(function () {
        return $.when(
            SaveBeneficiariesData(),
            SaveConRequestYesResponsesData()
        ).then(function () {
            ShowConFormMessage("Success", options.successMessage || "Form data saved successfully.");

            if (options.showAlert) {
                alert(options.successMessage || "Form data saved successfully.");
            }
        });
    }).fail(function (xhr) {
        console.log(xhr);
        ShowConFormMessage("Error", "Unable to save form data.");
    }).always(function () {
            HideProcessing();
    });
}

function SubmitFinalForm() {
    var request = UpdateFormData("CS", {
        validate: true,
        successMessage: "Form submitted successfully."
    });

    if (request && request.done) {
        request.done(function () {
            alert("Form submitted successfully. Once submitted you cannot make any further changes in the form.");
            SetSubmittedMode();
        });
    }
}

function SetSubmittedMode() {
    $("input, textarea, select")
        .not("[type='hidden']")
        .prop("disabled", true);

    $("#btnSaveForLater, #btnPrintPdf, #uploadSignedFormBtn, #btnSubmitFinal, #btnAddBeneficiary")
        .prop("disabled", true);

    $(".edit, .delete").prop("disabled", true);
}

function FillFormData() {
    var conId = GetQueryStringValue("ConID");

    if (!conId) {
        HideProcessing();
        return false;
    }

    ShowProcessing();

    return $.ajax({
        url: AppendQueryString(ConFormConfig.fillFlowUrl, "ConID", conId),
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            var data = NormalizeFlowResponse(response);

            if (!data) {
                return;
            }

            SetConFormValues(data);
            ApplyYesResponseVisibility();
        },
        error: function (xhr) {
            console.log(xhr);
            ShowConFormMessage("Error", "Unable to load existing form data.");
        },
        complete: function () {
            HideProcessing();
        }
    });
}

function BuildConFormPayload() {
    var payload = {};

    for (var i = 0; i < ConFormColumns.length; i++) {
        var columnName = ConFormColumns[i];

        if (columnName == "WFRun") {
            payload[columnName] = "Yes";
        } else {
            payload[columnName] = GetControlValue(columnName);
        }
    }

    return payload;
}

function GetControlValue(columnName) {
    var $control = $("#" + columnName);

    if ($control.length > 0) {
        if ($control.is(":checkbox")) {
            return $control.is(":checked") ? "Yes" : "No";
        }

        if (ConFormDateColumns.indexOf(columnName) > -1) {
            return ToSharePointDate(GetFlatpickrControlDate($control));
        }

        return $.trim($control.val());
    }

    var radioValue = GetRadioValue(columnName);

    if (radioValue !== undefined) {
        return radioValue;
    }

    return "";
}

function SetConFormValues(data) {
    for (var i = 0; i < ConFormColumns.length; i++) {
        var columnName = ConFormColumns[i];

        if (data[columnName] !== undefined && data[columnName] !== null) {
            SetControlValue(columnName, data[columnName]);
        }
    }
}

function SetControlValue(columnName, value) {
    var $control = $("#" + columnName);

    if ($control.length > 0) {
        if ($control.is(":checkbox")) {
            $control.prop("checked", IsTruthyValue(value));
            return;
        }

        if (ConFormDateColumns.indexOf(columnName) > -1) {
            ToHtmlDate($control, value);
            return;
        }

        $control.val(value);
        return;
    }

    var $radio = $("input[name='" + columnName + "'][value='" + EscapeJQuerySelectorValue(value) + "']");

    if ($radio.length > 0) {
        $radio.prop("checked", true);
    }
}

function NormalizeFlowResponse(response) {
    if (!response) {
        return null;
    }

    if ($.isArray(response)) {
        return response.length > 0 ? response[0] : null;
    }

    if (response.value && $.isArray(response.value)) {
        return response.value.length > 0 ? response.value[0] : null;
    }

    if (response.d && response.d.results && $.isArray(response.d.results)) {
        return response.d.results.length > 0 ? response.d.results[0] : null;
    }

    if (response.d) {
        return response.d;
    }

    return response;
}

function ToHtmlDate(ctrl, value) {
    if (ctrl && ctrl.jquery) {
        SetFlatpickrControlDate(ctrl, value);
        return;
    }

    return FormatFlatpickrDate(ParseDateValue(ctrl));
}

function IsTruthyValue(value) {
    return value === true ||
        value === "true" ||
        value === "True" ||
        value === "Yes" ||
        value === "1" ||
        value === 1;
}

function EscapeJQuerySelectorValue(value) {
    return value.toString().replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function HasAnyYesResponse() {
    for (var i = 0; i < ConFormQuestionFields.length; i++) {
        if (GetRadioValue(ConFormQuestionFields[i]) == "Yes") {
            return true;
        }
    }

    return false;
}

function GetRadioValue(name) {
    var $checked = $("input[name='" + name + "']:checked");

    if ($checked.length == 0) {
        return "";
    }

    return $checked.val();
}

function ToSharePointDate(value) {
    var dateValue = ParseDateValue(value);

    if (!dateValue) {
        return null;
    }

    return new Date(Date.UTC(
        dateValue.getFullYear(),
        dateValue.getMonth(),
        dateValue.getDate()
    )).toISOString();
}

function GetFlatpickrControlDate($control) {
    if (!$control || !$control.length) {
        return "";
    }

    var picker = $control[0]._flatpickr;

    if (picker && picker.selectedDates && picker.selectedDates.length > 0) {
        return picker.selectedDates[0];
    }

    return $.trim($control.val());
}

function SetFlatpickrControlDate($control, value) {
    var dateValue = ParseDateValue(value);

    if (!$control || !$control.length) {
        return;
    }

    if (!dateValue) {
        if ($control[0]._flatpickr) {
            $control[0]._flatpickr.clear();
        } else {
            $control.val("");
        }

        return;
    }

    if ($control[0]._flatpickr) {
        $control[0]._flatpickr.setDate(dateValue, true);
    } else {
        $control.val(FormatFlatpickrDate(dateValue));
    }
}

function ParseDateValue(value) {
    if (!value) {
        return null;
    }

    if (value instanceof Date) {
        return isNaN(value.getTime()) ? null : value;
    }

    var textValue = $.trim(value.toString());
    var dateValue = null;
    var parts;

    if (/^\d{1,2}-[A-Za-z]{3}-\d{4}$/.test(textValue)) {
        parts = textValue.split("-");
        var monthIndex = GetMonthIndex(parts[1]);

        if (monthIndex > -1) {
            dateValue = new Date(parseInt(parts[2], 10), monthIndex, parseInt(parts[0], 10));
        }
    } else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(textValue)) {
        parts = textValue.split("/");
        dateValue = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(textValue)) {
        parts = textValue.split("-");
        dateValue = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    } else {
        dateValue = new Date(textValue);
    }

    return dateValue && !isNaN(dateValue.getTime()) ? dateValue : null;
}

function FormatFlatpickrDate(value) {
    var dateValue = ParseDateValue(value);

    if (!dateValue) {
        return "";
    }

    var day = dateValue.getDate().toString().padStart(2, "0");
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][dateValue.getMonth()];

    return day + "-" + month + "-" + dateValue.getFullYear();
}

function GetMonthIndex(monthName) {
    var months = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        sep: 8,
        oct: 9,
        nov: 10,
        dec: 11
    };

    return months[monthName.toLowerCase()] !== undefined ? months[monthName.toLowerCase()] : -1;
}

function ClearConFormValidation() {
    /*$(".is-invalid").removeClass("is-invalid");
    $(".con-radio-invalid").removeClass("con-radio-invalid");
    $("#conFormValidationSummary").remove();*/

    $("#reviewValidationSummary")
        .addClass("d-none")
        .html("");

    
}

function MarkInvalid(selector) {
    $(selector).addClass("is-invalid");
}

function MarkRadioInvalid(name) {
    $("input[name='" + name + "']").closest(".question, .form-check, .gender-options, .col-lg-6, .col-md-6").addClass("con-radio-invalid");
}

function ShowConFormValidationErrors(errors) {
    var html = "<strong>Please complete the following:</strong><ul class='mb-0'>";

    for (var i = 0; i < errors.length; i++) {
        html += "<li>" + errors[i] + "</li>";
    }

    html += "</ul>";

    $("#reviewValidationSummary")
        .removeClass("d-none")
        .html(html);

    /*window.scrollTo({
        top: $("#reviewValidationSummary").offset().top - 80,
        behavior: "smooth"
    });*/
}

function ShowConFormMessage(title, message) {
   /* $("#conFormValidationSummary").remove();
    $("#sheetTabs").after(
        "<div id='conFormValidationSummary' class='alert alert-info m-3'>" +
        "<strong>" + title + ":</strong> " + message +
        "</div>"
    );*/
}

function IsValidEmail(email) {
    if ($.trim(email) == "") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function GetQuestionDisplayNumber(questionName) {
    return questionName.replace("P2Q", "").replace(/^([2-5])([1-9])$/, "$1.$2");
}

function ShowProcessing() {
    $("#pageLoader").stop(true, true).fadeIn(200);
}

function HideProcessing() {
    $("#pageLoader").stop(true, true).fadeOut(200);
}

function GetQueryStringValue(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
}

function InitializeConFormAccess() {
    ConFormAccess.mode = $.trim(GetQueryStringValue("mod")).toLowerCase();
    ConFormAccess.conId = $.trim(GetQueryStringValue("ConID"));
    ConFormAccess.token = $.trim(GetQueryStringValue("token"));
    ConFormAccess.isAdminRead = ConFormAccess.mode === "admread" && !!ConFormAccess.conId;
    ConFormAccess.isConsultant = !!ConFormAccess.conId && !!ConFormAccess.token;

    if (!ConFormAccess.isAdminRead && !ConFormAccess.isConsultant) {
        window.location.replace("errorhandler.html");
        return false;
    }

    return true;
}

function ApplyConFormAccessMode() {
    if (ConFormAccess.isAdminRead) {
        $("#reviewSubmitTabItem, #uploadSignedFormTabItem").addClass("d-none");
        $("#reviewSubmitPart, #uploadSignedFormPart").removeClass("show active").addClass("d-none");
        $("[data-next-tab='#reviewSubmitPart'], [data-next-tab='#uploadSignedFormPart']").addClass("d-none");

        $("#part1Sheet, #part2Sheet, #part3Sheet")
            .find("input, textarea, select")
            .prop("disabled", true);

        $("#part1Sheet #btnAddBeneficiary, #part1Sheet #btnSaveBeneficiary, #part1Sheet .edit, #part1Sheet .delete")
            .prop("disabled", true);
    } else {
        $("#reviewSubmitTabItem").removeClass("d-none");
    }
}

function AppendQueryString(url, key, value) {
    var separator = url.indexOf("?") > -1 ? "&" : "?";
    return url + separator + encodeURIComponent(key) + "=" + encodeURIComponent(value);
}

function SetQueryStringParameter(key, value) {
    var url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, "", url.toString());
}

function getGUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

$(document).on("change input", "input, select, textarea", function () {
    $(this).removeClass("is-invalid");
    $(this).closest(".question, .form-check, .gender-options, .col-lg-6, .col-md-6").removeClass("con-radio-invalid");
});






function ToggleYesResponseRow(rowToToggle, radioToCheck, clearWhenHidden) {
    clearWhenHidden = clearWhenHidden !== false;
    var checkedValue = $("input[name='" + radioToCheck + "']:checked").val();
    
    if (checkedValue == "Yes") {
        $("#" + rowToToggle).show();
    } else {
        $("#" + rowToToggle).hide();
        if (clearWhenHidden) {
            $("#" + rowToToggle).find("textarea").val("").removeClass("is-invalid");
        }
    }
}

function ApplyYesResponseVisibility() {
    $.each(ConFormYesExplanationFields, function (_, config) {
        ToggleYesResponseRow(config.rowId, config.question, false);
    });
}

function ValidateYesExplanationRows(errors) {
    $.each(ConFormYesExplanationFields, function (_, config) {
        if (GetRadioValue(config.question) != "Yes") {
            return;
        }

        $.each(ConFormYesExplanationColumns, function (_, column) {
            var fieldId = column.prefix + config.suffix;

            if ($.trim($("#" + fieldId).val()) == "") {
                errors.push("Form 3 - Question " + config.display + ": " + column.label + " is required in Explanation of \"Yes\" Responses.");
                MarkInvalid("#" + fieldId);
            }
        });
    });
}

function loadConRequestYesResponses() {
    $.each(conRequestYesResponses, function (_, item) {
        var config = GetYesExplanationConfig(item.QNo || item.QuestionNo || item.QuestionNumber || item.Question || item.QuestionCode);

        if (!config) {
            return;
        }

        SetYesExplanationRowValues(config, item);
    });

    ApplyYesResponseVisibility();
}

function GetYesExplanationConfig(questionValue) {
    if (!questionValue) {
        return null;
    }

    var normalized = questionValue.toString().replace(/^P2Q/i, "").replace(/\./g, "");

    for (var i = 0; i < ConFormYesExplanationFields.length; i++) {
        var config = ConFormYesExplanationFields[i];

        if (config.suffix.replace(/^Q/, "") == normalized ||
            config.display.replace(/\./g, "") == normalized ||
            config.question == questionValue) {
            return config;
        }
    }

    return null;
}

function SetYesExplanationRowValues(config, item) {
    $("#P2ExplainDetail" + config.suffix).val(item.P2ExplainDetail || item.ExplainDetail || item.Detail || "");
    $("#P2ExplainOrgName" + config.suffix).val(item.P2ExplainOrgName || item.ExplainOrgName || item.OrgName || item.OrganizationName || "");
    $("#P2ExplainBelongs" + config.suffix).val(item.P2ExplainBelongs || item.ExplainBelongs || item.BelongsTo || "");
    $("#P2ExplainValue" + config.suffix).val(item.P2ExplainValue || item.ExplainValue || item.Value || "");
    $("#P2ExplainInterest" + config.suffix).val(item.P2ExplainInterest || item.ExplainInterest || item.Interest || "");
    $("#P2ExplainOther" + config.suffix).val(item.P2ExplainOther || item.ExplainOther || item.Other || "");
}

function BuildConRequestYesResponsesPayload(conId) {
    var rows = [];

    $.each(ConFormYesExplanationFields, function (_, config) {
        if (GetRadioValue(config.question) != "Yes") {
            return;
        }

        rows.push({
            ConID: conId,
            QNo: config.display,
            QuestionCode: config.question,
            P2ExplainDetail: $.trim($("#P2ExplainDetail" + config.suffix).val()),
            P2ExplainOrgName: $.trim($("#P2ExplainOrgName" + config.suffix).val()),
            P2ExplainBelongs: $.trim($("#P2ExplainBelongs" + config.suffix).val()),
            P2ExplainValue: $.trim($("#P2ExplainValue" + config.suffix).val()),
            P2ExplainInterest: $.trim($("#P2ExplainInterest" + config.suffix).val()),
            P2ExplainOther: $.trim($("#P2ExplainOther" + config.suffix).val())
        });
    });

    return rows;
}





function loadBeneficiaries() {

    var tbody = "";
    $.each(beneficiaries, function (i, item) {

        tbody += "<tr>";
        tbody += "<td>" + HtmlEncode(item.Name) + "</td>";
        tbody += "<td>" + HtmlEncode(item.DOB) + "</td>";
        tbody += "<td>" + HtmlEncode(item.Sex) + "</td>";
        tbody += "<td>" + HtmlEncode(item.Relationship) + "</td>";
        tbody += "<td>" + HtmlEncode(item.Share) + "</td>";
        tbody += "<td class='no-print'>";
        tbody += "<button class='btn btn-sm btn-warning edit' data-id='" + i + "'>Edit</button> ";
        tbody += "<button class='btn btn-sm btn-danger delete' data-id='" + i + "'>Delete</button>";
        tbody += "</td>";
        tbody += "</tr>";
        tbody += "<tr class='beneficiary-address-row'>";
        tbody += "<td colspan='5'><strong>Address, e-mail and phone number:</strong><br> " + HtmlEncode(item.Address || "") + "</td>";
        tbody += "<td class='no-print'></td>";
        tbody += "</tr>";
    });

    $("#tblBeneficiary tbody").html(tbody);
    $("#hdnBeneficiariesJson").val(JSON.stringify(beneficiaries));
}

$(document).on("click", ".edit", function () {

    var i = $(this).data("id");
    var b = beneficiaries[i];

    $("#hdnRow").val(i);
    $("#txtBenName").val(b.Name);
    SetFlatpickrControlDate($("#txtBenDOB"), b.DOB);
    $("#ddlSex").val(b.Sex);
    $("#txtRelationship").val(b.Relationship);
    $("#txtShare").val(b.Share);
    $("#txtBenAddress").val(b.Address || "");

    ShowModal("beneficiaryModal");
});

$(document).on("click", ".delete", function () {

    var i = $(this).data("id");
    beneficiaries.splice(i,1);
    loadBeneficiaries();
});

function GetBeneficiaryShareTotal() {
    var total = 0;

    $.each(beneficiaries, function (_, item) {
        var share = parseFloat(item.Share);

        if (!isNaN(share)) {
            total += share;
        }
    });

    return Math.round(total * 100) / 100;
}

function FillBeneficiariesData() {
    var conId = GetQueryStringValue("ConID");

    if (!conId || !ConFormConfig.fillBeneficiariesFlowUrl) {
        return $.Deferred().resolve().promise();
    }

    return $.ajax({
        url: AppendQueryString(ConFormConfig.fillBeneficiariesFlowUrl, "ConID", conId),
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            beneficiaries = NormalizeBeneficiariesResponse(response);
            loadBeneficiaries();
        },
        error: function (xhr) {
            console.log(xhr);
            ShowConFormMessage("Error", "Unable to load beneficiary data.");
        }
    });
}

function FillConRequestYesResponsesData() {
    var conId = GetQueryStringValue("ConID");

    if (!conId || !ConFormConfig.getConRequestYesResponse) {
        return $.Deferred().resolve().promise();
    }

    return $.ajax({
        url: AppendQueryString(ConFormConfig.getConRequestYesResponse, "ConID", conId),
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            conRequestYesResponses = NormalizeConRequestYesResponses(response);
            loadConRequestYesResponses();
        },
        error: function (xhr) {
            console.log(xhr);
            ShowConFormMessage("Error", "Unable to load Yes-response explanation data.");
        }
    });
}

function SaveConRequestYesResponsesData() {
    var conId = GetQueryStringValue("ConID");

    if (!conId || !ConFormConfig.saveConRequestYesResponses) {
        return $.Deferred().resolve().promise();
    }

    var payload = {
        ConID: conId,
        ReplaceExisting: true,
        ConRequestYesResponses: BuildConRequestYesResponsesPayload(conId)
    };

    console.log("Saving Yes-response explanation data:", payload);

    return $.ajax({
        url: AppendQueryString(ConFormConfig.saveConRequestYesResponses, "ConID", conId),
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload),
        error: function (xhr) {
            console.log("Yes-response explanation save failed:", xhr);
            ShowConFormMessage("Error", "Unable to save Yes-response explanation data.");
        }
    });
}

function SaveBeneficiariesData() {
    var conId = GetQueryStringValue("ConID");

    if (!conId || !ConFormConfig.saveBeneficiariesFlowUrl) {
        return $.Deferred().resolve().promise();
    }

    return $.ajax({
        url: AppendQueryString(ConFormConfig.saveBeneficiariesFlowUrl, "ConID", conId),
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            ConID: conId,
            ReplaceExisting: true,
            Beneficiaries: BuildBeneficiariesPayload(conId)
        }),
        error: function (xhr) {
            console.log(xhr);
            ShowConFormMessage("Error", "Unable to save beneficiary data.");
        }
    });
}

function BuildBeneficiariesPayload(conId) {
    return $.map(beneficiaries, function (item, index) {
        return {
            ConID: conId,
            BeneficiaryName: item.Name || "",
            BeneficiaryDOB: ToSharePointDate(item.DOB),
            Sex: item.Sex || "",
            Relationship: item.Relationship || "",
            SharePaid: item.Share === "" ? null : Number(item.Share),
            Address: item.Address || "",
            SortOrder: index + 1
        };
    });
}

function NormalizeBeneficiariesResponse(response) {
    var rows = [];

    if ($.isArray(response)) {
        rows = response;
    } else if (response && $.isArray(response.Beneficiaries)) {
        rows = response.Beneficiaries;
    } else if (response && response.value && $.isArray(response.value)) {
        rows = response.value;
    } else if (response && response.d && response.d.results && $.isArray(response.d.results)) {
        rows = response.d.results;
    }

    return $.map(rows, function (item) {
        var share = item.Share !== undefined && item.Share !== null ? item.Share : item.SharePaid;

        return {
            Name: item.Name || item.BeneficiaryName || "",
            DOB: ToHtmlDate(item.DOB || item.BeneficiaryDOB || ""),
            Sex: item.Sex || "",
            Relationship: item.Relationship || "",
            Share: share !== undefined && share !== null ? share : "",
            Address: item.Address || ""
        };
    });
}

function NormalizeConRequestYesResponses(response) {
    var rows = [];

    if ($.isArray(response)) {
        rows = response;
    } else if (response && $.isArray(response.YesResponses)) {
        rows = response.YesResponses;
    } else if (response && response.value && $.isArray(response.value)) {
        rows = response.value;
    } else if (response && response.d && response.d.results && $.isArray(response.d.results)) {
        rows = response.d.results;
    }

    return $.map(rows, function (item) {
        return {
            QNo: item.QNo || item.QuestionNumber || item.Question || "",
            QuestionCode: item.QuestionCode || "",
            P2ExplainDetail: item.P2ExplainDetail || item.ExplainDetail || item.Detail || "",
            P2ExplainOrgName: item.P2ExplainOrgName || item.ExplainOrgName || item.OrgName || item.OrganizationName || "",
            P2ExplainBelongs: item.P2ExplainBelongs || item.ExplainBelongs || item.BelongsTo || "",
            P2ExplainValue: item.P2ExplainValue || item.ExplainValue || item.Value || "",
            P2ExplainInterest: item.P2ExplainInterest || item.ExplainInterest || item.Interest || "",
            P2ExplainOther: item.P2ExplainOther || item.ExplainOther || item.Other || ""
        };
    });
}

/*function HtmlEncode(value) {
    return $("<div>").text(value == null ? "" : value).html();
}*/

function setSectionDisabled(sectionId, disabled) {
    $("#" + sectionId)
        .find("input, textarea, select, button")
        .prop("disabled", disabled);
}

function HtmlEncode(value) {
    if (value == null) {
        return "";
    }

    return $("<div>")
        .text(value)
        .html()
        .replace(/\r\n|\r|\n/g, "<br>");
}

function ShowModal(id) {

    var modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
    return modal;
}

function HideModal(id) {
    bootstrap.Modal.getInstance(document.getElementById(id)).hide();
}





/******************************************  File Upload functions  **************************************************/

const UPLOAD_FLOW_URL = "https://defaultf610c0b7bd244b39810b3dc280afb5.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/2789e0be957f4cf89b53b97c90f8c10a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=KRJ6-JkXBsje-2i7NjvsO9OfwHaJvlYgQhbJINidb0A";
const MAX_FILE_SIZE_MB = 10;

function showUploadMessage(type, message) {
    $("#uploadMessage")
    .removeClass("d-none alert-success alert-danger alert-warning alert-info")
    .addClass("alert-" + type)
    .text(message);
}

function setUploadLoading(isLoading) {
    $("#uploadSignedFormBtn")
    .prop("disabled", isLoading)
    .text(isLoading ? "Uploading..." : "Upload");
}

function readFileAsBase64(file) {
    return new Promise(function (resolve, reject) {
    const reader = new FileReader();

    reader.onload = function () {
        const result = reader.result || "";
        const base64 = result.toString().split(",")[1];
        resolve(base64);
    };

    reader.onerror = function () {
        reject(new Error("Unable to read selected file."));
    };

    reader.readAsDataURL(file);
    });
}











/******************************************  Print to PDF functions  **************************************************/

async function downloadPdfFromBase64Flow() {
    
    const conId = GetQueryStringValue("ConID");
    
    const response = await fetch(ConFormConfig.generatePDFFlowURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ConID: conId,
            HtmlContent: await buildPrintableHtml(),
            FileName: conId + "_Consultant_Form.pdf"
        })
    });

     if (!response.ok) {
        const errorText = await response.text();
        console.log("PDF Flow error:", errorText);
        alert("PDF generation failed.");
        return;
    }

    const contentType = response.headers.get("content-type") || "";
    let base64 = "";
    let fileName = conId + "_Consultant_Form.pdf";

    if (contentType.indexOf("application/json") >= 0) {
        const result = await response.json();

        if (!result.pdfBase64) {
            console.log("PDF Flow response:", result);
            alert("PDF was not returned correctly.");
            return;
        }

        base64 = result.pdfBase64 || "";
        fileName = result.fileName || fileName;
    } else {
        base64 = await response.text();
    }

    base64 = base64.replace(/^BASE64:/, "");
    base64 = cleanBase64(base64);

    downloadBase64Pdf(base64, fileName);
}

function cleanBase64(base64) {
    return base64
        .replace(/^data:application\/pdf;base64,/, "")
        .replace(/\s/g, "")
        .replace(/^"|"$/g, "");
}

function downloadBase64Pdf(base64, fileName) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
}

function cloneHtmlWithCurrentFormValues(selector) {
    const $clone = $(selector).clone();

    $(selector).find("input, textarea, select").each(function (index) {
        const original = this;
        const cloned = $clone.find("input, textarea, select").eq(index)[0];

        if (!cloned) return;

        if (original.type === "checkbox" || original.type === "radio") {
            cloned.checked = original.checked;

            if (original.checked) {
                cloned.setAttribute("checked", "checked");
            } else {
                cloned.removeAttribute("checked");
            }
        } else if (original.tagName.toLowerCase() === "textarea") {
            cloned.value = original.value;
            cloned.innerHTML = original.value;
        } else if (original.tagName.toLowerCase() === "select") {
            cloned.value = original.value;

            $(cloned).find("option").each(function () {
                if (this.value === original.value) {
                    this.setAttribute("selected", "selected");
                } else {
                    this.removeAttribute("selected");
                }
            });
        } else {
            cloned.value = original.value;
            cloned.setAttribute("value", original.value);
        }
    });

    return $clone;
}

async function buildPrintableHtml() {
    const part1Html = await getPrintablePartHtml("#part1Sheet");
    // Footnotes are rendered as their own final page. Remove them from Part 2
    // so the converter cannot split or duplicate them at the end of that part.
    const part2Html = await getPrintablePartHtml("#part2Sheet", ["#footnotes"]);
    const part3Html = await getPrintablePartHtml("#part3Sheet");
    const footnotesHtml = await getPrintablePartHtml("#footnotes");

    return `
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        :root {
            --who-blue: #0f5e9c;
            --who-blue-dark: #073b63;
            --who-teal: #0f8c8c;
            --line: #d7e2ea;
            --soft: #f5f9fc;
        }

        @page {
            size: letter portrait;
            margin: 10mm;
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            line-height: 1.35;
            color: #212529;
            background: #fff;
            margin: 0;
        }

        .pdf-page {
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            page-break-after: always;
            break-after: page;
        }

        .pdf-page:last-child {
            page-break-after: auto;
            break-after: auto;
        }

        .pdf-footnotes-page {
            page-break-before: always;
            break-before: page;
            page-break-inside: avoid;
            break-inside: avoid;
            page-break-after: auto;
            break-after: auto;
        }

        .container {
            width: 100%;
            max-width: 1100px;
            padding-left: 12px;
            padding-right: 12px;
            margin-left: auto;
            margin-right: auto;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -8px;
            margin-right: -8px;
        }

        .row > * {
            flex-shrink: 0;
            width: 100%;
            max-width: 100%;
            padding-left: 8px;
            padding-right: 8px;
        }

        .g-3 {
            row-gap: 16px;
        }

        .col-2 { flex: 0 0 auto; width: 16.666667%; }
        .col-3 { flex: 0 0 auto; width: 25%; }
        .col-4 { flex: 0 0 auto; width: 33.333333%; }
        .col-6 { flex: 0 0 auto; width: 50%; }
        .col-8 { flex: 0 0 auto; width: 66.666667%; }
        .col-10 { flex: 0 0 auto; width: 83.333333%; }
        .col-12 { flex: 0 0 auto; width: 100%; }
        .col-md-6, .col-lg-6 { flex: 0 0 auto; width: 50%; }

        .d-flex { display: flex !important; }
        .d-block { display: block !important; }
        .gap-4 { gap: 1.5rem !important; }
        .align-items-center { align-items: center !important; }
        .text-center { text-align: center !important; }
        .fw-semibold { font-weight: 600 !important; }
        .mb-0 { margin-bottom: 0 !important; }
        .mb-3 { margin-bottom: 1rem !important; }
        .mt-3 { margin-top: 1rem !important; }
        .mt-4 { margin-top: 1.5rem !important; }
        .my-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }

        .page {
            max-width: 1100px;
            margin: 0 auto;
            padding: 24px 14px 48px;
        }

        .form-box {
            background: #fff;
            border: 3px solid #2b74b8;
            max-width: 900px;
            padding: 20px;
        }

        .document {
            background: #fff;
            border: 1px solid var(--line);
            box-shadow: none;
        }

        .topbar {
            border-top: 6px solid var(--who-teal);
            border-bottom: 1px solid var(--line);
            display: grid;
            grid-template-columns: 320px 1fr;
            align-items: center;
            gap: 22px;
            padding: 24px 28px;
        }

        .topbar img {
            width: min(304px, 100%);
            height: auto;
        }

        .masthead img {
            width: 92px;
            height: 92px;
            object-fit: contain;
        }

        .medical-section {
            position: relative;
        }

        .medical-version-text {
            position: absolute;
            top: 20px;
            right: -20px;
            transform: rotate(180deg);
            writing-mode: vertical-rl;
            white-space: nowrap;
            font-size: 9px;
            color: rgb(28, 28, 129);
            font-weight: normal;
        }

        .content {
            padding: 26px 28px 34px;
        }

        .notice {
            background: var(--soft);
            border-left: 5px solid var(--who-blue);
            padding: 18px 20px;
            margin-bottom: 22px;
        }

        .section {
            border: 1px solid var(--line);
            margin-top: 22px;
        }

        .section:first-child {
            margin-top: 0;
        }

        .section-title,
        h2 {
            background: #173d55;
            color: #fff;
            padding: 10px 14px;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0;
            margin: 0;
        }

        h1 {
            color: #173d55;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0 0 8px;
        }

        h3 {
            color: var(--who-blue-dark);
            font-size: 16px;
            margin: 0 0 12px;
            font-weight: 700;
        }

        .section-body {
            padding: 18px;
        }

        .subhead {
            background: var(--soft);
            border: 1px solid var(--line);
            color: #173d55;
            font-weight: 700;
            padding: 8px 12px;
            margin: 18px 0 14px;
            text-transform: uppercase;
        }

        .form-label {
            display: inline-block;
            margin-bottom: .5rem;
            font-weight: 700;
            color: #263a4a;
        }

        .form-control,
        .form-select {
            display: block;
            width: 100%;
            min-height: 38px;
            padding: .375rem .75rem;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            background-color: #fff;
            border: 1px solid #b7c8d3;
            border-radius: .375rem;
        }

        textarea.form-control {
            min-height: 86px;
            white-space: pre-wrap;
        }

        .form-check {
            display: block;
            min-height: 1.5rem;
            padding-left: 1.5em;
            margin-bottom: .125rem;
        }

        .form-check-input {
            float: left;
            margin-left: -1.5em;
            width: 1em;
            height: 1em;
            margin-top: .25em;
        }

        .gender-options {
            display: flex;
            gap: 22px;
            min-height: 38px;
            align-items: center;
        }

        .question {
            border-bottom: 1px solid var(--line);
            padding: 14px 0;
        }

        .question-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 18px;
            align-items: start;
        }

        .answer-options {
            min-width: 154px;
            display: flex;
            gap: 16px;
            justify-content: flex-end;
            white-space: nowrap;
        }

        .signature-row,
        .signature-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
        }

        .line-input {
            border: 0;
            border-bottom: 1px solid #000;
            border-radius: 0;
        }

        .signature {
            height: 35px;
            border-bottom: 1px solid #000;
        }

        .table {
            width: 100%;
            margin-bottom: 1rem;
            border-collapse: collapse;
        }

        .table th,
        .table td {
            padding: .5rem;
            border: 1px solid #dee2e6;
        }

        .table-light {
            background-color: #f8f9fa;
        }

        .img-fluid {
            max-width: 100%;
            height: auto;
        }

        img {
            max-width: 100%;
        }

        .nav,
        .tab-step-nav,
        .no-print,
        button,
        input[type="button"],
        input[type="submit"],
        input[type="file"] {
            display: none !important;
        }

        .tab-pane,
        .fade {
            display: block !important;
            opacity: 1 !important;
        }
    </style>
</head>
<body>
    <div class="pdf-page">${part1Html}</div>
    <div class="pdf-page">${part3Html}</div>
    <div class="pdf-page">${part2Html}</div>
    <div class="pdf-page pdf-footnotes-page">${footnotesHtml}</div>
</body>
</html>`;
}

async function getPrintablePartHtml(selector, removeSelectors) {
    const $clone = cloneHtmlWithCurrentFormValues(selector);
    await embedImagesAsBase64($clone);

    (removeSelectors || []).forEach(function (removeSelector) {
        $clone.find(removeSelector).remove();
    });

    $clone.removeClass("fade");
    $clone.addClass("show active");
    $clone.find(".collapse").addClass("show");
    $clone.find(".no-print, .tab-step-nav, button, input[type='button'], input[type='submit'], input[type='file']").remove();

    return $clone.prop("outerHTML");
}

async function embedImagesAsBase64($root) {
    const images = $root.find("img").toArray();

    for (const img of images) {
        const src = img.getAttribute("src");

        if (!src || src.startsWith("data:")) {
            continue;
        }

        try {
            const absoluteUrl = new URL(src, window.location.href).href;
            const response = await fetch(absoluteUrl);
            const blob = await response.blob();

            img.src = await new Promise(function (resolve) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            console.warn("Could not embed image:", src, e);
        }
    }
}
