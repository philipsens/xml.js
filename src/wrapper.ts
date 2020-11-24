export interface options {
    xml: string;
    schema: string | string[];
    format: string;
    TOTAL_MEMORY: number;
}

export default class xmllint {
    validateXML = (options: options): any => {
        //@ts-ignore
        var Module: any = {
            xml: options.xml,
            schema: options.schema,
            TOTAL_MEMORY: options.TOTAL_MEMORY,
        };
        if (options.format === 'rng') {
            Module['extension'] = '--relaxng';
        } else {
            Module['extension'] = '--schema';
        }

        //@ts-ignore
        /* XMLLINT.RAW.JS */

        Module['return'] = Module['return'].split('\n').slice(0, -2);

        return {
            errors: Module['return'].length ? Module['return'] : null,
        };
    };
}
