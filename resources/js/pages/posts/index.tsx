import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
}

interface Flash {
    success?: string;
    danger?: string;
}

export default function PostIndex({ posts }: { posts: Post[] }) {
    const { flash } = usePage<{ flash: Flash }>().props;

    const handleDelete = (postId) => {
        if (confirm('Are you sure you want to delete this post?')) {
            Inertia.delete(`/posts/${postId}`);
        }
    };

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Posts</h2>
                    <Link href={route('posts.create')} className="text-indigo-600 hover:underline">
                        Create Post
                    </Link>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <Table>
                        <TableCaption>{posts.length === 0 ? 'No post available!' : 'A list of your recent posts.'}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Thumbnail</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>
                                        <img
                                            src={`${import.meta.env.VITE_APP_URL}/storage/${post.image}`}
                                            alt={post.title}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                    </TableCell>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell className="text-right">
                                        <Link
                                            href={route('posts.edit', post.id)}
                                            className="text-sm text-green-600 hover:cursor-pointer hover:text-green-900 hover:underline"
                                        >
                                            Edit/View
                                        </Link>{' '}
                                        |{' '}
                                        <button
                                            className="text-sm text-red-600 hover:cursor-pointer hover:text-red-900 hover:underline"
                                            onClick={() => handleDelete(post.id)}
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
