var pe = process.env,
    config = {};

/**
 * To configure the bot, either set the values here directly -
 * or set environment variables.
 * SEE README.MD FOR DETAILS
 */
// GHE user may need to setup this
config.github = pe.github || '',
config.user = pe.targetUser || 'onyiny-ang',
config.repo = pe.targetRepo || 'chloroplasts',
config.botUser = pe.botUser || 'stroma-lamellae',
config.botPassword = pe.botPassword || '',
config.labelReviewed = pe.labelReviewed || 'reviewed',
config.labelNeedsReview = pe.labelNeedsReview || 'needs-review',
config.reviewsNeeded = pe.reviewsNeeded || 2;
config.instructionsComment = pe.instructionsComment || '';
config.pullRequestsStatus = pe.pullRequestsStatus || 'open';
config.mergeOnReview = pe.mergeOnReview || false;
config.oauth2token = pe.oauth2token || '';
config.excludeLabels = pe.excludeLabels || 'no-review';
config.filenameFilter = pe.filenameFilter || '["_posts"]';

// Setup Instructions Comment
if (config.instructionsComment === '') {
    var comment = 'Hi! I\'m Stromae your friendly plant Bot. For this PR be merged you\'ll need at least '+ 
        config.reviewsNeeded + ' comments containing the magic phrase "LGTM" ' +
                  '("Looks good to me" also works, for those of us that are really verbose).';

    config.instructionsComment = comment;
}

if (config.instructionsComment.indexOf('{reviewsNeeded}')) {
    config.instructionsComment = config.instructionsComment.replace('{reviewsNeeded}', config.reviewsNeeded);
}

module.exports = config;
