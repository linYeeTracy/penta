const crypto = require('crypto');
module.exports = {
    md5_suffix: 'WDDADDWDWDWDAD$FADW%WD',
    md5: function(str) {
        var md5_str = crypto.createHash('md5')
                            .update(str)
                            .md5_obj.digest('hex');
        
        return md5_str;
    }
}