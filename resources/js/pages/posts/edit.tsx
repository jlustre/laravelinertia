import AppLayout from '@/layouts/app-layout';
import { Post, type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post Edit/View',
        href: '/posts',
    },
];

export default function PostEdit({ currentPost }: { currentPost: Post }) {
    const [title, setTitle] = useState<string>(currentPost.title);
    const [content, setContent] = useState<string>(currentPost.content);
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(`${import.meta.env.VITE_APP_URL}/storage/${currentPost.image}`);
    const { errors } = usePage().props;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method', 'put');
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        router.post(route('posts.update', currentPost.id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    let ndx = 1;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post Edit/View" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="mx-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold">Post View/Edit</h2>
                    <Link href={route('posts.index')} className="text-indigo-600 hover:underline">
                        Posts List
                    </Link>
                </div>
                <section className="mx-auto mt-2 max-w-md rounded-lg bg-gray-100 p-4 shadow dark:bg-gray-900">
                    <form className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    autoFocus
                                    tabIndex={ndx++}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Title of the post"
                                />
                                <InputError message={errors.title} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="image">Image</Label>
                                <Input id="image" type="file" onChange={handleFileChange} tabIndex={ndx++} className="hover:cursor-pointer" />
                                <div className="flex gap-2">
                                    {/* {image && <img src={URL.createObjectURL(image)} alt={title} className="h-10 w-10 rounded-full object-cover" />} */}
                                    {imagePreview && <img src={imagePreview} alt="Preview image" className="h-12 w-12 rounded-full object-cover" />}
                                </div>
                                <InputError message={errors.image} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Type your content here."
                                />
                                <InputError message={errors.content} />
                            </div>

                            <Button type="submit" className="mt-4 w-full hover:cursor-pointer" tabIndex={ndx++}>
                                Update Post
                            </Button>
                            <div className="pt-1 text-center" tabIndex={ndx++}>
                                <Link href={route('posts.index')} className="text-indigo-600 hover:underline">
                                    Back To Posts List
                                </Link>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AppLayout>
    );
}
