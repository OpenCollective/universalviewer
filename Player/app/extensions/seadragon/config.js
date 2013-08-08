﻿{
    "options":
    {
        "sectionMappings":
        {
            "CoverFrontOutside": "Front Cover",
            "CoverBackOutside": "Back Cover",
            "TitlePage": "Title Page",
            "TableOfContents": "Table of Contents",
            "PartOfWork": "Part of Work"
        }
    },
    "modules":
    {
        "genericDialogue":
        {
            "content":
            {
                "emptyValue": "please enter a value",
                "pageNotFound": "page not found",
                "ok": "OK"
            }
        },
        "helpDialogue":
        {
            "content":
            {
                "title": "Help",
                "text": "This player has been developed to provide users with access to the all the content - books, archives, manuscripts, audio and video - the Wellcome Library has digitised. Digitisation is an ongoing activity, and more content will be made available gradually.<br><br> Access to some online content is restricted because of copyright or personal data reasons. For details see the <a href=\"/about-this-site/terms-and-conditions/\" target=\"_blank\">Terms and Conditions</a>.<br><br>If you have any problems using the player, please email the Library's Digital Services Team at <a href=\"mailto:librarysystemssupport@wellcome.ac.uk\" target=\"_blank\">librarysystemssupport@wellcome.ac.uk</a><br><br>The player software will be made available under an open source licence. Information about licensing will be posted here once this work is complete (estimated date June 2013).<br><br> The player was developed by <a href=\"http://www.digirati.co.uk\" target=\"_blank\">Digirati</a>."
            }
        },
        "embedDialogue":
        {
            "options":
            {
                "embedTemplate": "<div class=\"wellcomePlayer\" data-assetsequenceindex=\"{0}\" data-uri=\"{1}\" data-assetindex=\"{2}\" data-zoom=\"{3}\" style=\"width:{4}px; height:{5}px; background-color: #000\"></div>\n<script type=\"text/javascript\" id=\"embedWellcomePlayer\" src=\"{6}\"></script><script type=\"text/javascript\">/* wordpress fix */</script>"  
            },     
            "content":
            {
                "title": "Embed",
                "instructions": "To embed this item in your own website, copy and paste the code below:"
            }
        },
        "pagingHeaderPanel":
        {
            "content":
            {
                "help": "Help",
                "image": "image",
                "page": "page",
                "first": "first",
                "previous": "previous",
                "next": "next",
                "last": "last",
                "go": "go",
                "of": "of {0}",
                "emptyValue": "please enter a value"
            }
        },
        "treeViewLeftPanel":
        {
            "options":
            {
                "thumbsUriTemplate": "{0}/thumbs/{1}/{2}/{3}.jpg",
                "thumbsLoadRange": 15,
                "thumbsImageFadeInDuration": 300,
                "panelCollapsedWidth": 30,
                "panelExpandedWidth": 255,
                "panelOpen": true,
                "panelAnimationDuration": 250
            },
            "content":
            {
                "index": "Index",
                "thumbnails": "Thumbnails"
            }
        },
        "moreInfoRightPanel":
        {
            "options":
            {
                "panelCollapsedWidth": 30,
                "panelExpandedWidth": 255,
                "panelAnimationDuration": 250
            }
        },
        "extendedFooterPanel":
        {
            "content":
            {
                "fullScreen": "Full Screen",
                "exitFullScreen": "Exit Full Screen"
            }    
        }
    }
}