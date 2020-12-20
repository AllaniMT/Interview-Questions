package allani.interview;

public class Interview {

    public static String getTheStringInversed(String text){
        int lengthOfTheText = text.length();
        String result = "";
        for(int i = lengthOfTheText -1; i>=0; i--){
            result+=text.charAt(i);
        }
        return result;
    }

    public static void main(String[] args) {
        String theText = "Hello, I'm 26 Years old";
        System.out.println(getTheStringInversed(theText));
    }
}
