# Strapi Snippets

## Upload/Media Library

### Search files

```
// Infos from https://github.com/dej10/strapi-plugin-file-system/blob/main/server/controllers/fs.js
const files: File[] = await this._strapi.query('plugin::upload.file').findMany({
    where: {
    folderPath: {
        $eqi: '/',
    },
    },
});
```

### Add file entity

```
// Add file entity
    return await this._strapi.entityService.create('plugin::upload.file', {
      data: {
        // id: 35,
        name: "filename.png",
        alternativeText: null,
        caption: null,
        // width: 48,
        // height: 48,
        formats: null,
        hash: "file hash",
        // ext: '.png',
        mime: "image/png",
        size: 3.1,
        url: "http://fileurl",
        previewUrl: null,
        provider: 'strapi-provider-upload',
        provider_metadata: null,
        folderPath,
        // createdAt: '2024-10-09T08:55:15.522Z',
        // updatedAt: '2024-10-09T08:55:15.522Z',
        // documentId: 'inqi8y7bzcf9njwwst0yigo6',
        locale: null,
        publishedAt: null,
      },
    });
```

### Insert directly into DB table

from `https://docs.strapi.io/dev-docs/api/query-engine`

```
await strapi.db
  .getConnection()
  .insert({
    file_id: FILE_ID,
    folder_id: FOLDER_ID,
    file_ord: 1,
  })
  .into('files_folder_lnk');
```
