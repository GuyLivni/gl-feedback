const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="width: 90%; margin: 50px auto;">
        <div style="margin: 50px 0;">
            <span style="font-size: 20px;">
                <strong>Hi, I'd like your input</strong>
            </span>
        </div>
        <div style="margin: 20px auto;">
            Please answer the following question regarding, ${survey.title}:
        </div>
        <div style="background: #D8D8D8; border: 1px solid #A9A9A9; border-radius: 10px; padding: 5px 10px; margin: 20px auto;">
            <p>${survey.body}</p>
        </div>
        <p style="text-align: center; margin-top: 30px">
            <span style="margin: 10px;">
              <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
            </span>
            <span style="margin: 10px;">
              <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
            </span>
        </p>
        <p>
           Thank you,<br>
           The Feedback Team
        </p>
        </div>
      </body>
    </html>
  `;
};
