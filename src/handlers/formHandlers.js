
export const addItemHandler = async (values, { setSubmitting, resetForm, mutateAsync, navigate }) => {
    try {
        await mutateAsync(values);
        resetForm();
        navigate("/"); 

    } catch (error) {
        console.log(error, 'error in addItemHandler');
    }
    finally {
        setSubmitting(false);
        resetForm();
    }
}

export const editItemHandler = async (values, { setSubmitting, resetForm, mutateAsync, navigate }) => {

    try {
        await mutateAsync(values);
        resetForm();
        navigate("/"); 
    } catch (error) {
        console.log(error, 'error in editItemHandler');
    }
    finally {
        setSubmitting(false);
        resetForm();
    }
}