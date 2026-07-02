    var beneficiaries = [];
    
    $(document).ready(function () {

        FillFormData();
   
        $('#frm input[type="button"]').click(function () {

            SaveFormData();

        });

        $("#btnSaveBeneficiary").click(function () {

            if ($("#txtBenName").val() == "") {
                alert("Name is required");
                return;

            }

            if ($("#txtBenDOB").val() == "") {
                alert("DOB is required");
                return;
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

            var obj = {
                Name: $("#txtBenName").val(),
                DOB: $("#txtBenDOB").val(),
                Sex: $("#ddlSex").val(),
                Relationship: $("#txtRelationship").val(),
                Share: $("#txtShare").val()
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
            $("#ddlSex").val("");
            $("#beneficiaryModal").modal("show");
        });
    
});

function validateForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

function SaveFormData() {
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

function FillFormData() {
    if (!IsRequestAuthorized()) {
        alert("You are not authorized to fill this form.");
        return;
    }
}

function PrintForm() {
    

}

function UploadSignedPDF() {

}








function loadBeneficiaries() {

    var tbody = "";
    $.each(beneficiaries, function (i, item) {

        tbody += "<tr>";
        tbody += "<td>" + item.Name + "</td>";
        tbody += "<td>" + item.DOB + "</td>";
        tbody += "<td>" + item.Sex + "</td>";
        tbody += "<td>" + item.Relationship + "</td>";
        tbody += "<td>" + item.Share + "</td>";
        tbody += "<td class='no-print'>";
        tbody += "<button class='btn btn-sm btn-warning edit' data-id='" + i + "'>Edit</button> ";
        tbody += "<button class='btn btn-sm btn-danger delete' data-id='" + i + "'>Delete</button>";
        tbody += "</td>";
        tbody += "</tr>";
    });

    $("#tblBeneficiary tbody").html(tbody);
}

$(document).on("click", ".edit", function () {

    var i = $(this).data("id");
    var b = beneficiaries[i];

    $("#hdnRow").val(i);
    $("#txtBenName").val(b.Name);
    $("#txtBenDOB").val(b.DOB);
    $("#ddlSex").val(b.Sex);
    $("#txtRelationship").val(b.Relationship);
    $("#txtShare").val(b.Share);
    $("#hdnBeneficiariesJson").val(JSON.stringify(beneficiaries));

    ShowModal("beneficiaryModal");
});

$(document).on("click", ".delete", function () {

    var i = $(this).data("id");
    beneficiaries.splice(i,1);
    loadBeneficiaries();

    $("#hdnBeneficiariesJson").val(JSON.stringify(beneficiaries));
});

function ShowModal(id) {

    var modal = new bootstrap.Modal(document.getElementById(id));
    modal.show();
    return modal;
}

function HideModal(id) {
    bootstrap.Modal.getInstance(document.getElementById(id)).hide();
}