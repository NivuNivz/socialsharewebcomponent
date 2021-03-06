import { EventEmitter } from '@stencil/core';
import { WebSocialShareInput } from '../../types/web-social-share/web-social-share-input';
export declare class WebSocialShare {
    el: HTMLElement;
    closed: EventEmitter;
    show: boolean;
    share: WebSocialShareInput;
    hide(): void;
    render(): any;
    private renderTargets;
    private renderButtons;
    private renderButton;
    private handleShare;
    private handleFacebookShare;
    private handleTwitterShare;
    private handleEmailShare;
    private handleLinkedinShare;
    private handlePinterestShare;
    private handleRedditShare;
    private handleWhatsappShare;
    private handleCopyShare;
    private handleHackerNewsShare;
    private renderName;
}
