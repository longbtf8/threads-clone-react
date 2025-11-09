import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function PostItem({onClose}) {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40" onClick={onClose}>
            <Card className=" bg-[rgba(255,255,255,0.91)] border border-[rgba(255,255,255,0.1)] w-[620px] " onClick={(e)=>{e.stopPropagation()}}>

                <Separator className="bg-[rgba(255,255,255,0.1)]" />

                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>

                <Separator className="bg-[rgba(255,255,255,0.1)]" />
            </Card>
        </div>
    )
}

export default PostItem;