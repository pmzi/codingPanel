function checkValidation(type, parent) {

    errorInput = false;

    if (type == 1) { //withoutIcon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().removeClass("has-success").addClass("has-error");
                $(this).next().show();

                errorInput = true;

            } else {
                $(this).parent().addClass("has-success").removeClass("has-error");
                $(this).next().hide();
            }
        })
    } else if (type == 2) { //with icon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().parent().removeClass("has-success").addClass("has-error");
                $(this).next().next().show();

                errorInput = true;

            } else {
                $(this).parent().parent().addClass("has-success").removeClass("has-error");
                $(this).next().next().hide();
            }
        })


    } else if (type == 3) { //without float without icon
        $(parent).find("[data-required]").each(function () {
            if ($(this).val() == "" || $(this).val() == null) {

                $(this).parent().removeClass("has-success").addClass("has-error");
                $(this).next().next().show();

                errorInput = true;

            } else {
                $(this).parent().addClass("has-success").removeClass("has-error");
                $(this).next().next().hide();
            }
        })
    }

    return errorInput;
}

$(window).on("load", function () {
    $("button").click(function () {
        login();
    })
})

$(document).on("keydown", (e) => {
    if (e.keyCode == 13) { //enter
        login();
    }
})

function login() {
    if (!checkValidation(2, $("body"))) {

        showLoading();

        $.post("/", {
            "username": $("input").eq(0).val(),
            "password": $("input").eq(1).val()
        }, function (result) {

            result = JSON.parse(result);

            hideLoading();

            switch (result.status) {
                case 1:
                    showPropMsg("right", "top", "fadeInUp", "با موفقیت وارد شدید.", "success");
                    setTimeout(() => {

                        showPropMsg("right", "top", "fadeInUp", "در حال انتقال...", "information");

                        setTimeout(() => {
                            window.location.assign("panel");
                        }, 1000)

                    }, 500)
                    break;
                case -1:
                    showPropMsg("right", "top", "fadeInUp", "نام کاربری یا گذرواژه صحیح نمی‌باشد.", "error")
                    break;
            }

        });

    } else {
        showPropMsg("right", "top", "fadeInUp", "بعضی از فیلدها فاقد اعتبارند.", "error")
    }
}