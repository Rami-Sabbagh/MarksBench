import { addCollection } from '@iconify/react';

import download from '@iconify/icons-mdi/download';
import fileAlertOutline from '@iconify/icons-mdi/file-alert-outline';
import fileDocumentOutline from '@iconify/icons-mdi/file-document-outline';
import fileQuestionOutline from '@iconify/icons-mdi/file-question-outline';
import github from '@iconify/icons-mdi/github';
import heart from '@iconify/icons-mdi/heart';
import helpCircleOutline from '@iconify/icons-mdi/help-circle-outline';
import tableLarge from '@iconify/icons-mdi/table-large';
import textBoxPlusOutline from '@iconify/icons-mdi/text-box-plus-outline';
import trashCanOutline from '@iconify/icons-mdi/trash-can-outline';
import zipBoxOutline from '@iconify/icons-mdi/zip-box-outline';

addCollection({
    prefix: 'app',
    icons: {
        ['add-file']: textBoxPlusOutline,
        ['clear-all']: trashCanOutline,
        ['download']: download,
        ['file']: fileDocumentOutline,
        ['file-alert']: fileAlertOutline,
        ['file-unknown']: fileQuestionOutline,
        ['github']: github,
        ['heart']: heart,
        ['help']: helpCircleOutline,
        ['table']: tableLarge,
        ['zip']: zipBoxOutline,
    }
});
