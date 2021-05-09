var url = "www.futureconsult.uz/abiturients.html";
url = url.substring(0, url.lastIndexOf("."));


function postLike(e) {
    var element = $(e.currentTarget)['context'];
    switch (element.className) {
        case "like-post":
            url = "like";
            postLikeRequest("like", e.currentTarget);
            break;
        case "unlike-post":
            postLikeRequest("unlike", e.currentTarget);
            break;
    }

}
function myModal(title, body, type = 'custom') {
    var postModal = $('#custom-modal');
    var postModalHeaderTitle = postModal.find('#modal-header');
    var postModalHeader = postModal.find('.modal-header');
    var postModalContent = postModal.find('#modal-content');
    if (!postModal.hasClass('in'))
        postModal.addClass('in');
    if (type === 'danger') {
        postModalHeader.removeClass("bg-success");
        postModalHeader.addClass("bg-danger");
        postModalHeaderTitle.css("color", "#FFFFFF")
    } else if (type === 'success') {
        postModalHeader.removeClass("bg-danger");
        postModalHeader.addClass("bg-success");
        postModalHeaderTitle.css("color", "#FFFFFF")
    }
    postModalHeaderTitle.html(title);
    postModalContent.html(body);

    postModal.modal("show");
}

function postLikeRequest(url, element) {
    postID = element.dataset.postid;
    element = $(element);
    $.post("/post-like/" + url, {post_id: postID, "_csrf-frontend": yii.getCsrfToken()}, function (data) {
        if (data.success) {
            element.toggleClass("like-post unlike-post");
            var icon = element.find('.zmdi');
            icon.toggleClass('zmdi-favorite zmdi-favorite-outline');
            element.find('.like-count').text(data.count)
        }
    });
}

function postUnLike(postID, element) {
    $.delete("/post-like/unlike", {post_id: postID, "_csrf-frontend": yii.getCsrfToken()}, function (data) {
        if (data.success) {
            element.toggleClass("like-post unlike-post");
            var icon = element.find('.zmdi');
            icon.toggleClass('zmdi-favorite zmdi-favorite-outline');
        }
    })
}

(function ($) {
    "use strict";

    jQuery.each(["put", "delete"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
 
    /*-----------------------------
        Menu Stick
    ---------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.sticker').addClass("stick");
        } else {
            $('.sticker').removeClass("stick");
        }
    });

  

  
    
})

