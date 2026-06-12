import axios from "axios";

const register = async () => {
    try {
        const res = await axios.post(
            "http://64.23.232.25:8000/register/type_a",
            {
                email: "taaaest@gmail.com",
                password: "1234578",
                first_name: "Iohim",
                last_name: "Rahmallayev",
                father_name: "Rahmatulloh",
                phone: "90555234567",
                gender: "female",
                birth_date: "200229-01-01",
                region: "Samarqadsdsnd",
                district: "Samarsdsqand"
            }
        );

        // To'liq javob
        console.log("Response:", res.data);



    } catch (err) {
        console.log(err.response?.data || err);
    }
};

register();
