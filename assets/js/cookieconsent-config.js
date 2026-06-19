import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Cookie Consent",
                    description: "We use neccessary cookies only required for the site to function. By accepting, you agree to the Wavescope cookie policy. You can update your preferences any time.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Neccessary Only",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Neccessary Only",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: ""
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Relate to setting your privacy preferences, and filling in forms only. You can set your browser to block or alert you about these cookies, but some parts of the site may not work as a result.<ul><li>Cookie Consent Preferences</li><li>Hubspot Contact Us Form Related Cookies.</li></ul>",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "More information",
                            description: "<a class=\"cc__link\" href=\"#yourdomain.com\">Privacy Policy</a>."
                        }
                    ]
                }
            }
        }
    }
});