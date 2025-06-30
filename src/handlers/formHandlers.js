
export const addItemHandler = async (values, { setSubmitting, mutateAsync }) => {
    try {
        await mutateAsync(values);

    } catch (error) {
        console.log(error, 'error in addItemHandler');
    }
    finally {
        setSubmitting(false);
    }
}

export const editItemHandler = async (values, { setSubmitting, mutateAsync }) => {

    try {
        await mutateAsync(values);
    } catch (error) {
        console.log(error, 'error in editItemHandler');
    }
    finally {
        setSubmitting(false);
    }
}