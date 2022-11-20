async function insertCommentFeed(connection, insertCommentFeedParams) {
    const insertCommentFeedQuery = `
        INSERT INTO Comment(content, feedId)
        VALUES (?, ?);    
    `;
    const insertCommentFeedRow = await connection.query(
        insertCommentFeedQuery,
        insertCommentFeedParams
    );

    return insertCommentFeedRow;
}

async function insertCommentcmt(connection, insertCommentcmtParams) {
    const insertCommentcmtQuery = `
        INSERT INTO Comment(parent_comment, content, feedId)
        VALUES (?, ?, ?);
    `;

    const insertCommentFeedRow = await connection.query(
        insertCommentcmtQuery,
        insertCommentcmtParams
    );

    return insertCommentFeedRow;

}

async function selectComment(connection) {
    const selectCommentQuery = `
            SELECT userId, content
            FROM Comment;
        `;

    const [commentRows] = await connection.query(selectCommentQuery);
    return commentRows;

}

async function selectCommentUserId(connection, userId) {
    const selectCommentUserIdQuery = `
        SELECT userId, content
        FROM Comment
        WHERE userId = ?;
        `;
    const [userIdRow] = await connection.query(selectCommentUserIdQuery, userId);
    return userIdRow;
}

module.exports = {
    insertCommentFeed,
    insertCommentcmt,
    selectComment,
    selectCommentUserId
};