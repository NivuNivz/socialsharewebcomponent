import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f44fa713.js';

/**
 * Source: https://github.com/720kb/angular-socialshare/blob/master/dist/angular-socialshare.js
 */
class WebSocialShareFacebook {
    static async share(attrs) {
        let urlString;
        if (attrs.socialShareType && attrs.socialShareType === 'feed') {
            // if user specifies that they want to use the Facebook feed dialog
            //(https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
            urlString = 'https://www.facebook.com/dialog/feed?';
            if (attrs.socialShareVia) {
                urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
            }
            if (attrs.socialShareRedirectUri) {
                urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
            }
            if (attrs.socialShareUrl) {
                urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
            }
            if (attrs.socialShareTo) {
                urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
            }
            if (attrs.socialShareDisplay) {
                urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
            }
            if (attrs.socialShareRef) {
                urlString += '&ref=' + encodeURIComponent(attrs.socialShareRef);
            }
            if (attrs.socialShareFrom) {
                urlString += '&from=' + encodeURIComponent(attrs.socialShareFrom);
            }
            if (attrs.socialShareSource) {
                urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
            }
            window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
        else if (attrs.socialShareType && attrs.socialShareType === 'share') {
            // if user specifies that they want to use the Facebook share dialog
            //(https://developers.facebook.com/docs/sharing/reference/share-dialog)
            urlString = 'https://www.facebook.com/dialog/share?';
            if (attrs.socialShareVia) {
                urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
            }
            if (attrs.socialShareRedirectUri) {
                urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
            }
            if (attrs.socialShareUrl) {
                urlString += '&href=' + encodeURIComponent(attrs.socialShareUrl);
            }
            if (attrs.socialShareQuote) {
                urlString += '&quote=' + encodeURIComponent(attrs.socialShareQuote);
            }
            if (attrs.socialShareDisplay) {
                urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
            }
            if (attrs.socialShareMobileiframe) {
                urlString += '&mobile_iframe=' + encodeURIComponent(attrs.socialShareMobileiframe);
            }
            if (attrs.socialShareHashtags) {
                urlString += '&hashtag=' + encodeURIComponent(attrs.socialShareHashtags);
            }
            window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
        else if (attrs.socialShareType && attrs.socialShareType === 'send') {
            // if user specifies that they want to use the Facebook send dialog
            //(https://developers.facebook.com/docs/sharing/reference/send-dialog)
            urlString = 'https://www.facebook.com/dialog/send?';
            if (attrs.socialShareVia) {
                urlString += '&app_id=' + encodeURIComponent(attrs.socialShareVia);
            }
            if (attrs.socialShareRedirectUri) {
                urlString += '&redirect_uri=' + encodeURIComponent(attrs.socialShareRedirectUri);
            }
            if (attrs.socialShareUrl) {
                urlString += '&link=' + encodeURIComponent(attrs.socialShareUrl);
            }
            if (attrs.socialShareTo) {
                urlString += '&to=' + encodeURIComponent(attrs.socialShareTo);
            }
            if (attrs.socialShareDisplay) {
                urlString += '&display=' + encodeURIComponent(attrs.socialShareDisplay);
            }
            window.open(urlString, 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
        else {
            //otherwise default to using sharer.php
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(attrs.socialShareUrl || window.location.href), 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
    }
}

class WebSocialShareUtils {
    // Source: http://detectmobilebrowsers.com
    // Same implementation as in class DeckdeckgoUtils
    static isMobile() {
        if (!window) {
            return false;
        }
        const a = navigator.userAgent || navigator.vendor || window.opera;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    }
    static staticOpenNewWindow(urlString) {
        if (window.self !== window.top) {
            window.open(urlString, '_blank');
        }
        else {
            window.open(urlString, '_self');
        }
    }
}

class WebSocialShareTwitter {
    static async share(attrs) {
        let urlString = 'https://www.twitter.com/intent/tweet?';
        if (attrs.socialShareText) {
            urlString += 'text=' + encodeURIComponent(attrs.socialShareText);
        }
        if (attrs.socialShareVia) {
            urlString += '&via=' + encodeURIComponent(attrs.socialShareVia);
        }
        if (attrs.socialShareHashtags) {
            urlString += '&hashtags=' + encodeURIComponent(attrs.socialShareHashtags);
        }
        //default to the current page if a URL isn't specified
        urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);
        if (WebSocialShareUtils.isMobile()) {
            WebSocialShareUtils.staticOpenNewWindow(urlString);
        }
        else {
            window.open(urlString, 'Twitter', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
    }
}

class WebSocialShareEmail {
    static async share(attrs) {
        let urlString = 'mailto:';
        if (attrs.socialShareTo) {
            urlString += encodeURIComponent(attrs.socialShareTo);
        }
        urlString += '?';
        if (attrs.socialShareBody) {
            urlString += 'body=' + encodeURIComponent(attrs.socialShareBody);
        }
        if (attrs.socialShareSubject) {
            urlString += '&subject=' + encodeURIComponent(attrs.socialShareSubject);
        }
        if (attrs.socialShareCc) {
            urlString += '&cc=' + encodeURIComponent(attrs.socialShareCc);
        }
        if (attrs.socialShareBcc) {
            urlString += '&bcc=' + encodeURIComponent(attrs.socialShareBcc);
        }
        WebSocialShareUtils.staticOpenNewWindow(urlString);
    }
}

class WebSocialShareLinkedin {
    static async share(attrs) {
        let urlString = 'https://www.linkedin.com/shareArticle?mini=true';
        urlString += '&url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href);
        if (attrs.socialShareText) {
            urlString += '&title=' + encodeURIComponent(attrs.socialShareText);
        }
        if (attrs.socialShareDescription) {
            urlString += '&summary=' + encodeURIComponent(attrs.socialShareDescription);
        }
        if (attrs.socialShareSource) {
            urlString += '&source=' + encodeURIComponent(attrs.socialShareSource);
        }
        window.open(urlString, 'Linkedin', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
            + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
}

class WebSocialSharePinterest {
    static async share(attrs) {
        window.open('https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(attrs.socialShareUrl || window.location.href) + '&media=' + encodeURIComponent(attrs.socialShareMedia) + '&description=' + encodeURIComponent(attrs.socialShareText), 'Pinterest', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
            + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
}

class WebSocialShareReddit {
    static async share(attrs) {
        let urlString = 'https://www.reddit.com/';
        if (attrs.socialShareSubreddit) {
            urlString += 'r/' + attrs.socialShareSubreddit + '/submit?url=';
        }
        else {
            urlString += 'submit?url=';
        }
        /*-
        * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
        * So, overriding the width if it is less than 900 (played around to settle on this) and height if
        * it is less than 650px.
        */
        if (attrs.socialSharePopupWidth < 900) {
            attrs.socialSharePopupWidth = 900;
        }
        if (attrs.socialSharePopupHeight < 650) {
            attrs.socialSharePopupHeight = 650;
        }
        window.open(urlString + encodeURIComponent(attrs.socialShareUrl || window.location.href) + '&title=' + encodeURIComponent(attrs.socialShareText), 'Reddit', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
            + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
    }
}

class WebSocialShareWhatsapp {
    static async share(attrs) {
        const isMobile = WebSocialShareUtils.isMobile();
        let urlString = isMobile ? 'https://api.whatsapp.com/send?text=' : 'https://web.whatsapp.com/send?text=';
        if (attrs.socialShareText) {
            urlString += encodeURIComponent(attrs.socialShareText) + '%0A';
        }
        //default to the current page if a URL isn't specified
        urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);
        if (isMobile) {
            WebSocialShareUtils.staticOpenNewWindow(urlString);
        }
        else {
            window.open(urlString, 'WhatsApp', 'toolbar=0,status=0,resizable=yes,width=' + attrs.socialSharePopupWidth + ',height=' + attrs.socialSharePopupHeight
                + ',top=' + (window.innerHeight - attrs.socialSharePopupHeight) / 2 + ',left=' + (window.innerWidth - attrs.socialSharePopupWidth) / 2);
        }
    }
}

class WebSocialShareCopy {
    static async share(attrs) {
        try {
            await navigator.clipboard.writeText(attrs.socialShareUrl || window.location.href);
        }
        catch (err) {
            // Well it seems that copy isn't supported by this browser
        }
    }
}

class WebSocialShareHackerNews {
    static async share(attrs) {
        let urlString = 'https://news.ycombinator.com/submitlink?u=';
        //default to the current page if a URL isn't specified
        urlString += encodeURIComponent(attrs.socialShareUrl || window.location.href);
        if (attrs.socialShareText) {
            urlString += '&t=' + encodeURIComponent(attrs.socialShareText);
        }
        WebSocialShareUtils.staticOpenNewWindow(urlString);
    }
}

const webSocialShareCss = "div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity, 0.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height, 80px)}@media (max-width: 540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device, 140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;transition:opacity 0.1s linear;background-color:var(--web-social-share-backdrop-background, black);z-index:var(--web-social-share-zindex, 1000);transform:translate3d(0, 0, 2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:calc(var(--web-social-share-zindex, 1000) + 1);transform:translate3d(0, 0, 3px);width:100%;max-width:540px}@media (min-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{border-radius:var(--web-social-share-action-sheet-group-border-radius, 8px 8px 0 0)}}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{box-shadow:var(--web-social-share-action-sheet-group-box-shadow, 0 0 8px 4px rgba(0, 0, 0, 0.1));z-index:calc(var(--web-social-share-zindex, 1000) + 10);transform:translate3d(0, 0, 10px);background:var(--web-social-share-action-sheet-group-background, #fafafa);display:flex;justify-content:center;flex-wrap:wrap;height:0;transition-timing-function:cubic-bezier(0.36, 0.66, 0.04, 1);transition:height 0.2s ease-in}@media (max-width: 540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{justify-content:flex-start}}div.web-social-share div.web-social-share-target{margin:auto;width:var(--web-social-share-target-width, 4rem);height:var(--web-social-share-target-height, 3rem);display:flex;flex-direction:column;align-items:center;justify-content:center}div.web-social-share div.web-social-share-target button{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width, 100%);height:var(--web-social-share-button-height, 100%);font-size:var(--web-social-share-button-font-size)}div.web-social-share div.web-social-share-target p{margin:var(--web-social-share-brand-margin, 2px 0);color:var(--web-social-share-brand-color, inherit);font-size:var(--web-social-share-brand-font-size, 0.6rem)}div.web-social-share div.web-social-share-target div.web-social-share-button-icon{margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center}::slotted([slot=facebook]),::slotted([slot=twitter]),::slotted([slot=email]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=whatsapp]),::slotted([slot=copy]),::slotted([slot=hackernews]){display:none}";

const WebSocialShare = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleFacebookShare = async (attributes) => {
            await WebSocialShareFacebook.share(attributes);
        };
        this.handleTwitterShare = async (attributes) => {
            await WebSocialShareTwitter.share(attributes);
        };
        this.handleEmailShare = async (attributes) => {
            await WebSocialShareEmail.share(attributes);
        };
        this.handleLinkedinShare = async (attributes) => {
            await WebSocialShareLinkedin.share(attributes);
        };
        this.handlePinterestShare = async (attributes) => {
            await WebSocialSharePinterest.share(attributes);
        };
        this.handleRedditShare = async (attributes) => {
            await WebSocialShareReddit.share(attributes);
        };
        this.handleWhatsappShare = async (attributes) => {
            await WebSocialShareWhatsapp.share(attributes);
        };
        this.handleCopyShare = async (attributes) => {
            await WebSocialShareCopy.share(attributes);
        };
        this.handleHackerNewsShare = async (attributes) => {
            await WebSocialShareHackerNews.share(attributes);
        };
        this.closed = createEvent(this, "closed", 7);
    }
    hide() {
        let element = this.el.shadowRoot.querySelector('div.web-social-share');
        if (element) {
            element.classList.add('web-social-share-transition-close');
            setTimeout(() => {
                // Reflect css animation speed 400ms, see css
                this.show = false;
                element.classList.remove('web-social-share-transition-close');
                this.closed.emit(true);
            }, 200);
        }
        else {
            // Well we don't find the action sheet, we could mark it as not displayed
            this.show = false;
            this.closed.emit(true);
        }
    }
    render() {
        return (h("div", { class: this.show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close' }, h("div", { class: 'web-social-share-backdrop', onClick: () => this.hide() }), h("div", { class: 'web-social-share-action-sheet', onClick: () => this.hide() }, h("div", { class: 'web-social-share-action-sheet-container' }, h("div", { class: 'web-social-share-action-sheet-group' }, this.renderTargets())))));
    }
    renderTargets() {
        if (!this.share || !this.share.config) {
            return (h("span", null));
        }
        else {
            return (this.share.config.map((config) => h("div", { class: "web-social-share-target" }, this.renderButtons(config))));
        }
    }
    renderButtons(share) {
        if (share.facebook) {
            return this.renderButton(share.facebook, 'facebook', this.handleFacebookShare, 'Facebook');
        }
        else if (share.twitter) {
            return this.renderButton(share.twitter, 'twitter', this.handleTwitterShare, 'Twitter');
        }
        else if (share.email) {
            return this.renderButton(share.email, 'email', this.handleEmailShare, 'Email');
        }
        else if (share.linkedin) {
            return this.renderButton(share.linkedin, 'linkedin', this.handleLinkedinShare, 'Linkedin');
        }
        else if (share.pinterest) {
            return this.renderButton(share.pinterest, 'pinterest', this.handlePinterestShare, 'Pinterest');
        }
        else if (share.reddit) {
            return this.renderButton(share.reddit, 'reddit', this.handleRedditShare, 'Reddit');
        }
        else if (share.whatsapp) {
            return this.renderButton(share.whatsapp, 'whatsapp', this.handleWhatsappShare, 'WhatsApp');
        }
        else if (share.copy) {
            return this.renderButton(share.copy, 'copy', this.handleCopyShare, 'Copy');
        }
        else if (share.hackernews) {
            return this.renderButton(share.hackernews, 'hackernews', this.handleHackerNewsShare, 'Hacker News');
        }
        else {
            return undefined;
        }
    }
    renderButton(attributes, slotName, action, defaultBrandName) {
        return (h("button", { onClick: ($event) => this.handleShare($event, attributes, action), class: 'web-social-share-button' }, h("div", { class: "web-social-share-button-icon" }, h("slot", { name: slotName })), this.renderName(attributes, defaultBrandName)));
    }
    async handleShare($event, attributes, action) {
        $event.stopPropagation();
        await action(attributes);
        this.hide();
    }
    renderName(displayAttributes, defaultBrandName) {
        if (this.share.displayNames) {
            return (h("p", null, displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== '' ? displayAttributes.brandName : defaultBrandName));
        }
        else {
            return (h("span", null));
        }
    }
    get el() { return getElement(this); }
};
WebSocialShare.style = webSocialShareCss;

export { WebSocialShare as web_social_share };
