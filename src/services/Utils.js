import $ from "jquery";

export function scrollToElement(selector) {

    try {
        $('html, body').animate({scrollTop: $(selector).offset().top}, 1000);
    } catch (e) {
        // console.log('scrollToElement catch e',e);

    }
}

export function slugify(party) {

    return party.replace("'", "").replace(" ", "-").toLowerCase();
}

export function unSlugify(str) {
    return str.replace("-", " ");
}