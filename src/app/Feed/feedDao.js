async function insertFeed(connection, insertFeedParams) {
    const insertFeedQuery = `
        INSERT INTO Feed(content, imageUrl)
        VALUES(?, ?);
    `;

    const insertFeedRow = await connection.query(
        insertFeedQuery,
        insertFeedParams
    );

    return insertFeedRow;
}

async function updateFeed(connection, id, feedId, content) {
    const updateFeedQuery = `
        UPDATE Feed
        SET content = ?
        WHERE userId =? and feedId =?;
    `;
    const updateFeedRow = await connection.query(updateFeedQuery, [content, id, feedId]);
    return updateFeedRow[0];
}

module.exports = {
    insertFeed,
    updateFeed
    
};