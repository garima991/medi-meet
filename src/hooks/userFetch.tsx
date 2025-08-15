import { useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const useFetch = (callback) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const func  = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const response = await callback(...args);
            setData(response);
        }
        catch (error) {
            setError(error);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }

    }

    return {data, loading, error, func, setData};
 }

 export default useFetch;