
$(function () {
    addEventListener('WebComponentsReady', function () {
        var options = {
            id: 'LDP6312',
            type: 'download',
            'background-image': 'http://image.url',
            steps: {
                0: {
                    title: '1',
                    content: 'To download the Case Study, please provide your email'
                },
                1: {
                    title: '2',
                    content: 'Please provide more informations to complete your Case Study download',
                }
            },
            success: {
                title: 'Thanks for your download',
                content: 'Your download should start automatically, if not use the direct link',

            },
            action: {
                url: 'http://www.3ds.com/en/file.pdf',
                label: 'Download',
                content: 'PDF - 3,84Mo',
            },
            accelerate: {
                url: 'http://www.3ds.com/en/contact-us',
                label: 'contact me',
                content: 'You want to be contacted for a commercial purpose?',
            },
            error: {
                title: 'Sorry !',
                content: '<p>This service is temporarily unavailable. please try again later or contact the <a href="#" class="btn btn-primary">support</a></p> '
            },
            form: {
                nextLabel: 'Next',
                prevLabel: 'Back',
                api: {
                    url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp',
                },
                callback: {
                    success: function(){
                        //...
                    }
                },
            }
        };

        $('#ldp').threeds().landingPage(options);
    });
});