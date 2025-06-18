import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";
import admin from 'firebase-admin';

export async function POST(request: Request) {
  try {
    // Parse the JSON body of the request to extract the parameters
    const { 
      role, 
      level, 
      type, 
      techstack, 
      questions, 
      userId 
    } = await request.json();

    // Construct the interview object to store in Firestore
    const interview = {
      role,
      type,
      level,
      techstack: Array.isArray(techstack) ? techstack : techstack.split(','), // Ensure techstack is an array
      questions: Array.isArray(questions) ? questions : [questions], // Ensure questions is an array
      userId,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    // Store the interview in Firestore under the "interviews" collection
    await db.collection("interviews").add(interview);
    
    // Decrement user credits
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      credits: admin.firestore.FieldValue.increment(-1),
    });

    // Send success response
    return Response.json(
      {
        success: true,
        message: "Interview created successfully"
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Error handling: log the error and return a failure response
    console.error("Error creating interview:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create interview",
      },
      {
        status: 500,
      }
    );
  }
}
