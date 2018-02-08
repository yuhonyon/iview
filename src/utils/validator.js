import AsyncValidator from 'async-validator';
import rules from 'async-validator/lib/rule/';
import {isEmptyValue} from 'async-validator/lib/util';

function any(rule, value, callback, source, options) {

    const errors = [];
    const validate = rule.required || (!rule.required && source.hasOwnProperty(rule.field));
    if (validate) {
        rule.type=typeof value;
        if (typeof value === 'string') {
            if (isEmptyValue(value, 'string') && !rule.required) {
                return callback();
            }
            rules.required(rule, value, source, errors, options, 'string');
            if (!isEmptyValue(value, 'string')) {
                rules.type(rule, value, source, errors, options);
                rules.range(rule, value, source, errors, options);
                rules.pattern(rule, value, source, errors, options);
                if (rule.whitespace === true) {
                    rules.whitespace(rule, value, source, errors, options);
                }
            }

        } else if (typeof value === 'number') {
            if (isEmptyValue(value) && !rule.required) {
                return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
                rules.type(rule, value, source, errors, options);
                rules.range(rule, value, source, errors, options);
            }
        } else if (Array.isArray(value)) {
            rule.type='array';
            if (isEmptyValue(value, 'array') && !rule.required) {
                return callback();
            }
            rules.required(rule, value, source, errors, options, 'array');
            if (!isEmptyValue(value, 'array')) {
                rules.type(rule, value, source, errors, options);
                rules.range(rule, value, source, errors, options);
            }
        } else if (typeof value === 'object' || typeof value === 'boolean') {
            if (isEmptyValue(value) && !rule.required) {
                return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
                rules.type(rule, value, source, errors, options);
            }
        }

    }
    callback(errors);
}
AsyncValidator.register('any', any);

export default AsyncValidator;
