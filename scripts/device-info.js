const userAgent = navigator.userAgent;
const platform = userAgent.toLowerCase();

/**
 * Returns the user's browser.
*/

function getBrowser() {
    if (userAgent.includes('Chrome') && !userAgent.includes('Edge') && !userAgent.includes('OPR')) {
        return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        return 'Safari';
    } else if (userAgent.includes('Edg')) {
        return 'Edge';
    } else {
        return 'Unknown';
    }
}

/**
 * Returns the user's operating system. 
*/

function getOperatingSystem() {
    if (platform.includes('windows')) {
        return 'Windows';
    } else if (platform.includes('mac')) {
        return 'MacOS';
    } else if (platform.includes('linux')) {
        return 'Linux';
    } else if (platform.includes('android')) {
        return 'Android'
    } else if (/iphone|ipad|ipod/.test(platform)) {
        return 'iOS';
    } else {
        return 'Unknown';
    }
}

let appleDevice = false;

document.addEventListener('DOMContentLoaded', function() {
    const browser = getBrowser();
    const os = getOperatingSystem();

    if (browser === 'Safari') {
        appleDevice = true;
    }

    if (os === 'MacOS' || os === 'iOS') {
        appleDevice = true;
    }

    if (appleDevice) {
        const contactMessage = document.getElementById('contact-message');
        if (contactMessage) {
            contactMessage.innerHTML = 'Vous pouvez me contacter par courriel ou <a class="link" href="sms:ludovickmessier27@icloud.com">iMessage</a> à<br><a href="mailto:ludovickmessier27@icloud.com">ludovickmessier27@icloud.com</a>';
        }
    }
});
