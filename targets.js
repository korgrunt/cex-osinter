const { createVerify } = require("crypto")

const targets = [
    {
        name: "Twitter",
        description: "Know if the hacker post on twitter",
        fiability: "9/10",
        active: true,
        url: "https://x.com/i/flow/signup",
        method: "register",
        steps: [ // if a
            {
                name: "loading",
                action: "wait",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 6000, // delay befor triger this step
                delayAfter: 6000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "click create account",
                action: "click",
                xpath: "/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/button[2]/div",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 6000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/label/div/div[1]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "Email has already been taken.",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 3000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }
        ]
    },
    {
        name: "Binance",
        url: "https://www.binance.com/en",
        method: "register",
        description: "Know if the hacker has a binance account",
        fiability: "9/10",
        active: true,
        steps: [ // if a
            {
                name: "loading",
                action: "wait",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 6000, // delay befor triger this step
                delayAfter: 6000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "cookie-pop-up",
                action: "click",
                xpath: false,
                cssSelector: "#onetrust-reject-all-handler",// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "go-page-signup",
                action: "click",
                xpath: "/html/body/div[3]/div/div/main/div[1]/div/div/div[1]/div/div[1]/div[1]/div/div/a",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 5000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "filll-input-signup",
                action: "fill",
                value: false,
                xpath: "/html/body/div[1]/div/main/div[1]/div[1]/form/div[1]/div[2]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "cgu-consent",
                action: "click",
                xpath: "/html/body/div[1]/div/main/div[1]/div[1]/form/div[2]/div/div[1]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "signup-validation",
                action: "click",
                xpath: "/html/body/div[1]/div/main/div[1]/div[1]/form/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check if user has account",
                action: "check",
                value: "This account already exists; please log in.",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            }
        ] // if all steps (requiredTrue: true) are passed, the account exist
    },
    {
        name: "Coinbase",
        url: "https://www.coinbase.com/en-fr/signup",
        method: "register",
        description: "Know if the hacker has a coinbase account",
        fiability: "9/10",
        active: true,
        steps: [ // if a
            {
                name: "loading",
                action: "wait",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 6000, // delay befor triger this step
                delayAfter: 6000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "cookie-pop-up",
                action: "click",
                xpath: "/html/body/div[1]/div/div[2]/div/div/button[1]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "filll-input-email-signup",
                action: "fill",
                value: false,
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div/span/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "click-continue",
                action: "click",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div/div/div[2]/div[3]/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 6000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-legal-firstname",
                action: "fill",
                value: "georges",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div[1]/div/form/div/div[1]/div[1]/div/div/div/div/span/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-legal-lasttname",
                action: "fill",
                value: "harris",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div/div/form/div/div[1]/div[2]/div/div/div/div/span",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-password",
                action: "fill",
                value: "dhfYE374!?du3999999",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div/div/form/div/div[3]/div/div/div/div/span",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "accept-cgu",
                action: "click",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div/div/form/div/div[4]/div/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "click-create-account",
                action: "click",
                xpath: "/html/body/div[1]/div/div/div[2]/div/div/div/div/form/div/div[7]/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "An account already exists with this email address.",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }


        ] // if all steps (requiredTrue: true) are passed, the account exist
    },
    {
        name: "Facebook",
        description: "Know if the hacker has facebook account and check his pics !",
        fiability: "9/10",
        active: true,
        url: "https://www.facebook.com/login/identify/?ctx=recover&from_login_screen=0",
        method: "recover-pass",
        steps: [ // if a
            {
                name: "loading",
                action: "wait",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 6000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "accept-cookie",
                action: "click",
                xpath: "/html/body/div[3]/div[2]/div/div/div/div/div[3]/div[2]/div/div[2]/div[1]/div",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div[1]/div[1]/div[1]/div/div[2]/div/div/form/div/div[2]/div/table/tbody/tr[2]/td[2]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "search-email",
                action: "click",
                xpath: "/html/body/div[1]/div[1]/div[1]/div/div[2]/div/div/form/div/div[3]/div/div[1]/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "Facebook user",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 3000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }
        ]
    },

    {
        name: "Instagram",
        description: "Know if the hacker has instagram account and check his lifestyle",
        fiability: "9/10",
        active: true,
        url: "https://www.instagram.com/accounts/emailsignup/",
        method: "register",
        steps: [ // if a
            {
                name: "loading",
                action: "wait",
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 6000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "accept-cookie",
                action: "click",
                xpath: "/html/body/div[6]/div[1]/div/div[2]/div/div/div/div/div[2]/div/button[2]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 3000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[4]/div/label/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-full-name",
                action: "fill",
                value: "George harris",
                xpath: "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[5]/div/label/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-username",
                action: "fill",
                value: "noexisting3742736user",
                xpath: "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[6]/div/label/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-password",
                action: "fill",
                value: "egdtegTEG6386??dh",
                xpath: "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[7]/div/label/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "valid-register",
                action: "click",
                xpath: "/html/body/div[2]/div/div/div[2]/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[8]/div",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "Another account is using the same email.",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 3000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }
        ]
    },
    {
        name: "LouisVuitton",
        description: "Know if the hacker love beauty things or use LV for washing money",
        fiability: "9/10",
        active: true,
        url: "https://account.louisvuitton.com/fra-fr/mylv/inscription",
        method: "http-login",
        steps: [ // if a
            {
                name: "accept-cookie",
                action: "click",
                xpath: "/html/body/div[1]/div/div[2]/div/form/ul/li[3]/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 3000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div[2]/div/div/div/div[1]/div[2]/div/form/div[3]/div[1]/div/div[1]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "click-confirm-email",
                action: "click",
                xpath: "/html/body/div[2]/div/div/div/div[1]/div[2]/div/form/div[3]/div[1]/div/div[2]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 3000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "Ce compte My LV existe déjà. Identifiez-vous ou modifiez le mot de passe.",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 3000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }

        ]
    },
    {
        name: "Amazon",
        description: "Know if the hacker use amazon, and then, colaborate with Bezos for get a shipping address.",
        fiability: "9/10",
        active: true,
        url: "https://www.amazon.fr",
        method: "register",
        steps: [ // if a
            {
                name: "click-go-to-register",
                action: "click",
                xpath: "/html/body/div[1]/header/div/div[3]/div[14]/div[2]/div/a",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 3000, // delay befor triger this step
                requiredTrue: true,
            },


            {
                name: "fill-name",
                action: "fill",
                value: "George Harris",
                xpath: "/html/body/div[2]/div[1]/div[2]/div/div[2]/div/form/div/div/div[1]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div[2]/div[1]/div[2]/div/div[2]/div/form/div/div/div[2]/div[2]/span/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-password",
                action: "fill",
                value: "az983YDHnc!",
                xpath: "/html/body/div[2]/div[1]/div[2]/div/div[2]/div/form/div/div/div[3]/div[1]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-repeat-password",
                action: "fill",
                value: "az983YDHnc!",
                xpath: "/html/body/div[2]/div[1]/div[2]/div/div[2]/div/form/div/div/div[3]/div[2]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },


            {
                name: "click-confirm-email",
                action: "click",
                xpath: "/html/body/div[2]/div[1]/div[2]/div/div[2]/div/form/div/div/div[6]/span/span/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 2000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: false,
                value: "Il existe déjà un compte associé à cette adresse e-mail.",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 2000, // delay befor triger this step
                requiredTrue: true,
            }



        ]
    },
    {
        name: "EasyJet",
        description: "Know if the hacker travel with easyjet",
        fiability: "4/10",
        active: true,
        url: "https://www.easyjet.com/en/register",
        method: "register",
        steps: [ // if a
            {
                name: "accep-cookie",
                action: "click",
                xpath: "/html/body/section[1]/div/div/div[2]/button[2]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 500, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-email",
                action: "fill",
                value: false,
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-password",
                action: "fill",
                value: "aze7364HDNC!!PZ0",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[2]/div[2]/div[2]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "scroll-down",
                action: "scroll-down",
                xpath: false,
                delayBefore: 500, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-repeat-password",
                action: "fill",
                value: "aze7364HDNC!!PZ0",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[2]/div[2]/div[5]/div[1]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "choose sex",
                action: "click",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[1]/div/div/div/div[1]/div",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "select sex",
                action: "click",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[2]/div[1]/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-firstname",
                action: "fill",
                value: "michel sardou",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[2]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-surname",
                action: "fill",
                value: "michmich",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[3]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-address",
                action: "fill",
                value: "19 rue des bwana",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[4]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-city",
                action: "fill",
                value: "Paris",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[6]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "scroll-down",
                action: "scroll-down",
                xpath: false,
                delayBefore: 500, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "fill-postcode",
                action: "fill",
                value: "75000",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[7]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-country",
                action: "fill",
                value: "france",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[3]/div[2]/div[8]/div/div/div/div[1]/div[2]",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "confirme-country",
                action: "type-enter",
                value: false,
                xpath: false,
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },

            {
                name: "fill-phone",
                action: "fill",
                value: "0658994452",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[4]/div[2]/div[2]/div/input",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "scroll-down",
                action: "scroll-down",
                xpath: false,
                delayBefore: 500, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "scroll-down",
                action: "scroll-down",
                xpath: false,
                delayBefore: 500, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "clickregister  ",
                action: "click",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[1]/div[7]/button",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 1000, // delay befor triger this step
                delayAfter: 1000, // delay befor triger this step
                requiredTrue: true,
            },
            {
                name: "check-ever-registred-msg",
                action: "check",
                xpath: "/html/body/div[1]/div/div[20]/div/div/div/form/div[3]/div/div[2]/div/div/div/div[1]/div[2]",
                value: "Email already registered",
                cssSelector: false,// cssSelector or xpath, not both, else, xpath will always be used in priority
                delayBefore: 3000, // delay befor triger this step
                delayAfter: 500, // delay befor triger this step
                requiredTrue: true,
            }

        ]
    },
]





module.exports = { targets }
