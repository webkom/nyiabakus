import { Taskforce } from '../generated/sanity.types';
import { sanityClient } from './client';
import { groq } from 'next-sanity';


export async function getTaskforce(): Promise<Taskforce | null> {
    let data: Taskforce | undefined;

    try {
        data = await sanityClient
            .fetch(groq`*[_type == "taskforce"]`)
            .then((res: Taskforce[]) =>
                res.find((item) => item._id === 'taskforce')
            );
    } catch (e) {}

    return data ?? null;
}

export default getTaskforce;
