import React from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import showResult from '../showResult'
import dataCountry from "../dataCountry";


const validate = values => {
    const errors = {};
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!values.userName) {
        errors.userName = 'Введите имя'
    }
    if(!values.userEmail) {
        errors.userEmail = 'Введите емаил'
    } else if(!reg.test(values.userEmail)) {
        errors.userEmail = 'Емаил должен содержать @'
    }
    return errors
};

const createRenderer = render => ({ input, meta, label, ...rest}) =>
    <>
        {/*<pre>*/}
        {/*    {JSON.stringify(meta, 0, 2)}*/}
        {/*</pre>*/}
        <label className={[ meta.error &&
                meta.touched ? 'error' : '',
                meta.active ? 'active' : ''
        ].join(' ')}
        >
            {label}
        </label>
        {render(input, label, rest)}
        {meta.error &&
            meta.touched &&
            <Message negative>
                <Message.Header>{meta.error}</Message.Header>
            </Message>
        }
    </>;

const renderInput = createRenderer((input, label) =>
    <input {...input}
           placeholder={label}
    />
);

const renderSelect = createRenderer((input, label, {children}) =>
    <select {...input}>
        {children}
    </select>
);

const FormCart = ({handleSubmit, submitting}) => (

    <Form onSubmit={handleSubmit(showResult)}>
        <Form.Field>
            <Field name={'userName'}
                   component={renderInput}
                   label={'Name'}
            />
        </Form.Field>
        <Form.Field>
            <Field
                name={'userEmail'}
                component={renderInput}
                label={"Email"}
            />
        </Form.Field>
        <Form.Field>
            <Field
                name={'userCountry'}
                component={renderSelect}
                label={"Country"}
            >
                <option />
                {dataCountry.map((data, i) =>

                    <option key={i} value={data}>
                        {data}
                    </option>
                )}
            </Field>
        </Form.Field>
        {/*<Form.Field>*/}
        {/*    <Checkbox label='I agree to the Terms and Conditions' />*/}
        {/*</Form.Field>*/}
        <Button type='submit' disabled={submitting}>Submit</Button>
    </Form>
);

export default reduxForm({
   form: 'cart-form',
    destroyOnUnmount: false,
    validate,
})(FormCart);